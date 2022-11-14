import { View, Text, Image, SafeAreaView } from 'react-native';
import { styles } from './styles';
import ready from "../../assets/ready.png";

//exemplpo
//<Ready text="Pet publicado para adoção" botaotext="Voltar"/>

const text = "Conta excluida"
const botaotext = "Sair"

export function Ready() {

    return (

        <View style={styles.container}>
            <Image source={ready} />
            <View style={styles.textos}>
                <Text style={styles.sucesso}>Sucesso</Text>
                <Text style={styles.texto}>{text}</Text>
            </View>

            <View style={styles.botao}>
                <Text style={styles.botaoText}>{botaotext}</Text>
            </View>

        </View>
    );
}