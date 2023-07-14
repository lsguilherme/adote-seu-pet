import S3 from 'aws-sdk/clients/s3';
import dotenv from "dotenv";
dotenv.config();

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
});

export function upload() {
    const uploadParams = {
        Bucket: bucketName,
        Body: 'Hello Word!',
        Key: 'hello.txt'
    }

    s3.upload(upload).promise();
};
