import React, { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";
import usePersist from "../../hooks/usePersist";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Inicio({ navigation }) {
  /* const { tokenStored, userStored } = usePersist();

  console.log(tokenStored);
  useEffect(() => {
    const token = AsyncStorage.getItem("token");

    if (tokenStored) {
      return navigation.navigate("Home", {
        token: tokenStored,
        userId: userStored,
      });
    } else {
      return navigation.navigate("Inicio");
    }
  }, []); */

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/Logo-Inicio.png")}
          style={styles.logo}
        />
      </View>

      <TouchableHighlight
        style={[
          styles.botaoContainer,
          { backgroundColor: THEME.COLORS.PRIMARY },
        ]}
        onPress={() => navigation.navigate("Login")}
        underlayColor={THEME.COLORS.PRIMARY}
      >
        <Text style={styles.name}>ENTRAR</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[
          styles.botaoContainer,
          { backgroundColor: THEME.COLORS.SECONDARY, marginTop: 15 },
        ]}
        onPress={() => navigation.navigate("Cadastro")}
        underlayColor={THEME.COLORS.SECONDARY}
      >
        <Text style={styles.name}>CADASTRAR</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
