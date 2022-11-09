import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import ready from "../../assets/ready.png";

//exemplpo
//<Ready text="Pet publicado para adoção" botaotext="Voltar"/>

export default function Ready(props) {

    return (
        <View style={styles.container}>
            <Image source={ready} />
            <View style={styles.textos}>
                <Text style={styles.sucesso}>Sucesso</Text>
                <Text style={styles.texto}>
                    {props.text}
                </Text>
            </View>

            <View style={styles.botao}>
                <Text style={styles.botaoText}>{props.botaotext}</Text>
            </View>

        </View>
    );
}