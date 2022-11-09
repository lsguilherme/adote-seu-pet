import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export default function Menu() {

    return (
    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View style={styles.container}>

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
                    <Image source={require('../../assets/iconFavoritos.png')} />
                    <Text>Favoritos</Text>
                </View>

                <View style={styles.blocoIcones}>
                    <Image source={require('../../assets/iconConta.png')} />
                    <Text>Conta</Text>
                </View>

            </View>
        </View>
    </View>
    );
}