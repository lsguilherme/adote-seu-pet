import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export default function Footer() {

    return (
        <View transparent={true} style={styles.container}>

            <View style={styles.linha}></View>

            <View style={styles.icones}>
                <View style={styles.blocoIcones}>
                    <Image source={require('../../assets/IconInicio.png')} />
                    <Text>Inicio</Text>
                </View>

                <View style={styles.blocoIcones}>
                    <Image source={require('../../assets/iconAnunciar.png')} />
                    <Text>Anunciar</Text>
                </View>

                <View style={styles.blocoIcones}>
                    <Image source={require('../../assets/iconConversas.png')} />
                    <Text>Conversas</Text>
                </View>

                <View style={styles.blocoIcones}>
                    <Image source={require('../../assets/iconConta.png')} />
                    <Text>Conta</Text>
                </View>
            </View>

        </View>
    );
}