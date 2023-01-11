import axios from "axios";
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
import { LOCAL_URL, REMOTE_URL } from "../../utils/url";
export function Cadastro({ navigation }) {
  const [getEmail, setEmail] = useState();
  const [getNome, setNome] = useState();
  const [getSenha, setSenha] = useState();

  async function cadastrar() {
    axios
      .post(`http://localhost:5000/usuarios/`, {
        email: getEmail,
        senha: getSenha,
        nome: getNome,
      })
      .then(function (response) {
        setEmail("");
        setSenha("");
        setNome("");
        console.log(response.data);
        alert("Criado com sucesso!");
      })
      .catch(function (error) {
        alert(error);
      });
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{}}>
          <Text style={styles.title}>{`
          Olá! 
          Crie uma conta 
          para adotar seu novo 
          amiguinho.`}</Text>
        </View>

        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/Logo-Cadastro.png")}
            style={styles.logo}
          />
        </View>
      </View>

      <View>
        <Text style={[styles.label, { marginTop: 8 }]}>Nome</Text>
        <TextInput
          style={styles.input}
          value={getNome}
          onChangeText={(value) => setNome(value)}
        />
      </View>

      <View>
        <Text style={[styles.label, { marginTop: 8 }]}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={getEmail}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View>
        <Text style={[styles.label, { marginTop: 8 }]}>Senha</Text>
        <TextInput
          style={styles.input}
          value={getSenha}
          onChangeText={(value) => setSenha(value)}
          secureTextEntry={true}
        />
      </View>

      <TouchableHighlight
        style={[
          styles.botaoContainer,
          { backgroundColor: THEME.COLORS.PRIMARY, marginTop: 24 },
        ]}
        onPress={() => cadastrar()}
        underlayColor={THEME.COLORS.PRIMARY}
      >
        <Text style={styles.name}>CADASTRAR</Text>
      </TouchableHighlight>

      <TouchableOpacity
        style={styles.cadastro}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Já possui conta?</Text>
        <Text style={{ textDecorationLine: "underline" }}>
          Clique aqui para entrar
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
