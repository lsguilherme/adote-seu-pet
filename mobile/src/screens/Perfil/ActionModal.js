import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';

export function ActionModal({ closeModal }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={closeModal}
            ></TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.ecluirContaText}>Excluir conta</Text>
                <Text style={styles.temCertezaText}>Tem certeza que quer apagar a conta ?</Text>

                <View style={styles.buttonsYesNo}>
                <TouchableOpacity
                        style={styles.NOactionButton}
                        onPress={() => { }}><Text style={styles.NObuttonActionText}>Não</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.YESactionButton}
                        onPress={() => { }}><Text style={styles.YESbuttonActionText}>Sim</Text></TouchableOpacity>
                </View>


            </View>
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
        margin: 40,
        backgroundColor: 'white',
        borderRadius: 8
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
        marginRight: 40
    },
    YESbuttonActionText: {
        color: 'white'
    },
    NObuttonActionText: {
        color: 'black'
    },
    buttonsYesNo: {
        flexDirection: 'row',
    },
    ecluirContaText: {
        paddingBottom: 15
    },
    temCertezaText: {

    }
    //https://www.youtube.com/watch?v=ir4Jo7712M8
    //https://www.youtube.com/watch?v=Cvo5pCyhoqc

    //sombra
    //https://snack.expo.dev/

    //https://reactnative.dev/docs/shadow-props
})