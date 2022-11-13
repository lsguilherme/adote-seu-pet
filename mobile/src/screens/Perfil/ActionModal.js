import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';

import { Ready } from "../../components/Ready";

export function ActionModal({ closeModal }) {

    const Titulo = "Excluir conta"
    const TextoSegundario = "Tem certeza que quer apagar a conta ?"

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={closeModal}
            ></TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.textoPrincipal}>{Titulo}</Text>
                <Text style={styles.textoSegundario}>{TextoSegundario}</Text>

                <View style={styles.buttonsYesNo}>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        style={styles.NOactionButton}
                        onPress={closeModal}><Text style={styles.NObuttonActionText}>Não</Text></TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.YESactionButton}
                        onPress={() => {  }}><Text style={styles.YESbuttonActionText}>Sim</Text></TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={closeModal}
            ></TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        alignContent: 'center'
    },
    content: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 8,

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 7,
        elevation: 1,
        shadowRadius: 8
    },
    YESactionButton: {
        backgroundColor: '#FF7575',
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginTop: 15

    },
    NOactionButton: {
        backgroundColor: '#F4F4F4',
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginTop: 15,
        marginRight: 40,
    },
    YESbuttonActionText: {
        color: 'white',
    },
    NObuttonActionText: {
        color: 'black',
    },
    buttonsYesNo: {
        flexDirection: 'row',
    },
    textoPrincipal: {
        paddingBottom: 15,
    },
    textoSegundario: {

    }
    //https://www.youtube.com/watch?v=ir4Jo7712M8
    //https://www.youtube.com/watch?v=Cvo5pCyhoqc

    //sombra
    //https://snack.expo.dev/

    //https://reactnative.dev/docs/shadow-props
})