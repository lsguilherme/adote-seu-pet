import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Footer } from '../../components/Footer';

import { NomeDaPagina } from '../../components/NomeDaPagina';

import { styles } from '../Conversations/styles';
import { useNavigation } from "@react-navigation/native";

export function Chat(route, navigate) {

    const navigation = useNavigation()

    return (
        <>
            <SafeAreaView>

                <NomeDaPagina nomePagina={route.params?.nome} />

                <View style={styles.container}>

                    <ScrollView style={styles.scrollView}>

                        <Text></Text>

                    </ScrollView>
                </View>

            </SafeAreaView>

            <Footer />
        </>
    );
}