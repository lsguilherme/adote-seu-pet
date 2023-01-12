import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";
import { REMOTE_URL } from "../../utils/url";
import axios from "axios";

export function Login({ navigation }) {
  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  async function login() {
    await axios
      .post(`${REMOTE_URL}/usuarios/login`, {
        email: getEmail,
        senha: getSenha,
      })
      .then(function (response) {
        setEmail("");
        setSenha("");
        navigation.navigate("Home");
      })
      .catch(function (error) {
        alert(error);
      });
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ alignItems: "center", backgroundColor: "#F3F3F3" }}>
        <View>
          <Image
            source={require("../../assets/Logo-Login.png")}
            style={styles.logo}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Bem vindo de volta!!</Text>
        </View>

        <View>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={getEmail}
            onChangeText={(value) => setEmail(value)}
          />
        </View>

        <View>
          <Text style={[styles.label, { marginTop: 25 }]}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={getSenha}
            onChangeText={(value) => setSenha(value)}
          />
        </View>

        <TouchableHighlight
          style={[
            styles.botaoContainer,
            { backgroundColor: THEME.COLORS.PRIMARY, marginTop: 35 },
          ]}
          onPress={() => login()}
          underlayColor={THEME.COLORS.PRIMARY}
        >
          <Text style={styles.name}>ENTRAR</Text>
        </TouchableHighlight>

        <TouchableOpacity
          style={styles.cadastro}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text>Não possui uma conta?</Text>
          <Text style={{ textDecorationLine: "underline" }}>
            Clique aqui para criar
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
