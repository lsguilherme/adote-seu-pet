import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';

export function Footer(navigate) {

    const navigation = useNavigation()

    return (
        <View transparent={true} style={styles.container}>

            <View style={styles.linha}></View>

            <View style={styles.icones}>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.blocoIcones}>
                    <Image source={require('../../assets/IconInicio.png')} />
                    <Text>Inicio</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('AnuncioPet')} style={styles.blocoIcones}>
                    <Image source={require('../../assets/iconAnunciar.png')} />
                    <Text>Anunciar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Conversations')} style={styles.blocoIcones}>
                    <Image source={require('../../assets/iconConversas.png')} />
                    <Text>Conversas</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={styles.blocoIcones}>
                    <Image source={require('../../assets/iconConta.png')} />
                    <Text>Conta</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}