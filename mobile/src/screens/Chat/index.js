import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Footer } from "../../components/Footer";

import { NomeDaPagina } from "../../components/NomeDaPagina";

import { styles } from "./styles";

export function Chat() {
  return (
    <>
      <SafeAreaView>
        <NomeDaPagina nomePagina="Nome do anunciante" />

        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.chatStyle}>
              <Text>Chat</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <Footer />
    </>
  );
}
