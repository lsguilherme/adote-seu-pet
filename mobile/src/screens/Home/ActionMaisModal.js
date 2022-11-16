import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import Imagem from "../../assets/imageCategoria.png";

export function ActionMaisModal({ closeModal }) {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.nomeDapPagina.NomePage}>

                    <View style={styles.nomeDapPagina.textAndImage}>
                        <TouchableOpacity
                            style={{ zIndex: 9 }}
                            onPress={closeModal}>
                            <Image onPr style={styles.nomeDapPagina.tamanho} source={require('../../assets/iconBack.png')} />
                        </TouchableOpacity>
                        <Text style={styles.nomeDapPagina.texto}>Categorias</Text>
                    </View>

                    <View style={styles.nomeDapPagina.linha}></View>

                </View>

                <View style={styles.categorias}>

                    <View style={styles.blocoLinha}>
                        <View style={styles.imgText}>
                            <Image style={styles.img} source={Imagem} />
                            <Text style={styles.titulo}>Gatos</Text>
                        </View>

                        <View style={styles.imgText}>
                            <Image style={styles.img} source={Imagem} />
                            <Text style={styles.titulo}>Cachorros</Text>
                        </View>

                        <View style={styles.imgText}>
                            <Image style={styles.img} source={Imagem} />
                            <Text style={styles.titulo}>Hamster</Text>
                        </View>
                    </View>

                    <View style={styles.blocoLinha}>
                        <View style={styles.imgText}>
                            <Image style={styles.img} source={Imagem} />
                            <Text style={styles.titulo}>Passaros</Text>
                        </View>

                        <View style={styles.imgText}>
                            <Image style={styles.img} source={Imagem} />
                            <Text style={styles.titulo}>Tubarão</Text>
                        </View>

                        <View style={styles.imgText}>
                            <Image style={styles.img} source={Imagem} />
                            <Text style={styles.titulo}>Peixe</Text>
                        </View>
                    </View>

                </View>

            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F3F3',
        height: '100%',
    },
    blocoLinha: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    categorias: {
        justifyContent: 'space-evenly',
        flexDirection: 'column'
    },
    imgText: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%'
    },
    titulo: {
        textAlign: 'center',
        lineHeight: 12,
        fontSize: 16,
        padding: 3
    },


    nomeDapPagina: {
        NomePage: {
            width: '100%',
        },
        textAndImage: {
            alignItems: 'center',
            paddingTop: 10,
            flexDirection: 'row',
            paddingBottom: 10,
            width: '100%',
        },
        linha: {
            height: 1,
            alignSelf: 'center',
            width: 350,
            backgroundColor: '#D7D7D7',
            borderRadius: 50
        },
        tamanho: {
            right: 0,
            marginLeft: 25,
            zIndex: 2,

        },
        texto: {
            textAlign: 'center',
            position: 'absolute',
            width: '100%',
            zIndex: 1,
        }
    },

})