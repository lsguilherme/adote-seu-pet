import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';

export function ActionModal({ closeModal }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={{ flex: 1, zIndex: 9 }}
                onPress={{ closeModal }}
            ></TouchableOpacity>

            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => { }}></TouchableOpacity>

                <Text style={styles.ecluirConta}>Excluir conta</Text>
                <Text style={styles.temCerteza}>Tem certeza que quer apagar a conta ?</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
        padding: 20,
        backgroundColor: 'red',
        borderRadius: 8
    },
    actionButton: {
        backgroundColor: 'red',
        
    },
    ecluirContaText: {
        alignItems: 'center'
    },
    temCertezaText: {
        alignItems: 'center'
    }
})