import sharp from "sharp";
import amqplib from 'amqplib';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config();

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3Client = new S3Client({
    region: region,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    }
});

(async () => {
    const queueAPI = 'tasksAPI';
    const queueConverter = 'tasksConverter';
    const conn = await amqplib.connect('amqp://localhost:5672');

    const ch1 = await conn.createChannel();
    const ch2 = await conn.createChannel();
    await ch1.assertQueue(queueConverter);

    // Listener
    await ch1.consume(queueConverter, (msg) => {
        if (msg !== null) {
            const foto = JSON.parse(msg.content)
            sharp(Buffer.from(foto.buffer))
                .jpeg({ quality: 80 })
                .toBuffer()
                .then(async (data) => {
                    let fileName = `pets/${foto.id}.jpeg`
                    const params = {
                        ACL: "public-read",
                        Bucket: bucketName,
                        Key: fileName,
                        ContentEncoding: foto.encoding,
                        ContentType: foto.mimetype,
                        Body: data
                    };

                    try {
                        await s3Client.send(new PutObjectCommand(params));
                        ch2.sendToQueue(queueAPI, Buffer.from(JSON.stringify({ status: 200, url: `https://s3.${region}.amazonaws.com/${bucketName}/${fileName}` })));
                    } catch (err) {
                        ch2.sendToQueue(queueAPI, Buffer.from(JSON.stringify({ erro: true, message: err.message })));
                    }

                })
                .catch((err) => {
                    console.log(queueAPI, err);
                });
            ch1.ack(msg);
        } else {
            ch2.sendToQueue(queueAPI, 'Consumer cancelado pelo servidor');
        }
    });
})();
