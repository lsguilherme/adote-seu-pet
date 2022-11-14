import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { THEME } from '../../theme';

export function ExcluirContaModal({ closeModal }) {

    const titulo = "Excluir conta"
    const subtitulo = "Você quer mesmo apagar esta conta ?"

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={closeModal}
            ></TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.textoPrincipal}>{titulo}</Text>
                <Text style={styles.textoSegundario}>{subtitulo}</Text>

                <View style={styles.buttonsYesNo}>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        style={styles.NOactionButton}
                        onPress={closeModal}>
                        <Text style={styles.NObuttonActionText}>Não</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.YESactionButton}
                        onPressOut={closeModal}
                        
                        onPress={() => navigation.navigate('Ready')}
                        >
                        <Text style={styles.YESbuttonActionText}>Sim</Text>
                    </TouchableOpacity>
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
        alignContent: 'center',
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
        backgroundColor: '#fe0000',
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
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    },
    NObuttonActionText: {
        color: 'black',
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    },
    buttonsYesNo: {
        flexDirection: 'row',
        marginTop: 10
    },
    textoPrincipal: {
        paddingBottom: 15,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.MD
    },
    textoSegundario: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM
    }
})