import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import ready from "../../assets/ready.png";

//exemplo
//onPress={() => {navigation.navigate("Ready", {text: 'Pet publicado para adoção',botaotext: 'Voltar'})}}

export function Ready({route}) {

    const navigation = useNavigation()

    return (

        <View style={styles.container}>
            <Image source={ready} />
            <View style={styles.textos}>
                <Text style={styles.sucesso}>Sucesso</Text>
                <Text style={styles.texto}>{route.params?.text}</Text>
            </View>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Inicio')}
            >
                <View style={styles.botao}>
                    <Text style={styles.botaoText}>{route.params?.botaotext}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}