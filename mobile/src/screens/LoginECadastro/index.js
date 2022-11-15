import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

export function LoginECadastro({ route, navigation }) {
  const [getLogin, setLogin] = useState();

  useEffect(() => {
    const { login } = route.params;

    setLogin(login);
  });

  return (
    <SafeAreaView style={styles.container}>
      {getLogin ? (
        <View style={{ alignItems: "center", backgroundColor: "#F3F3F3" }}>
          <ScrollView>
            <View>
              <Image
                source={require("../../assets/Logo-Login.png")}
                style={styles.logo}
              />
            </View>

            <View style={{alignItems:'center'}}>
              <Text style={styles.title}>Bem vindo de volta!!</Text>
            </View>

            <View>
              <Text style={styles.label}>E-mail</Text>
              <TextInput style={styles.input} keyboardAppearance/>
            </View>

            <View>
              <Text style={[styles.label, { marginTop: 25 }]}>Senha</Text>
              <TextInput style={styles.input} secureTextEntry={true} />
            </View>

            <TouchableHighlight
              style={[
                styles.botaoContainer,
                { backgroundColor: THEME.COLORS.PRIMARY, marginTop: 35 },
              ]}
              onPress={() => navigation.navigate("Home", { login: true })}
              underlayColor={THEME.COLORS.PRIMARY}
            >
              <Text style={styles.name}>ENTRAR</Text>
            </TouchableHighlight>

            <TouchableOpacity
              style={styles.cadastro}
              onPress={() =>
                navigation.navigate("LoginECadastro", { login: false })
              }
            >
              <Text>Não possui uma conta?</Text>
              <Text style={{ textDecorationLine: "underline" }}>
                Clique aqui para criar
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      ) : (
        <Text>Cadastro</Text>
      )}
    </SafeAreaView>
  );
}
