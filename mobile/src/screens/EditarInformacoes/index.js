import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Text,
} from "react-native";
import { THEME } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { REMOTE_URL } from "../../utils/url";



import { Footer } from "../../components/Footer";
import { NomeDaPagina } from "../../components/NomeDaPagina";

import { styles } from "./styles";
import axios from "axios";

import { useIsFocused } from "@react-navigation/native";
export function EditarInformacoes({ route }) {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [focusComponent, setFocusComponent] = React.useState("");
  const navigation = useNavigation()

  const [nome, setNome] = useState();
  const [getToken, setToken] = useState(route.params.token);
  const [getUserId, setUserId] = useState(route.params.userId);

  async function pegarNome() {
    await axios.get(`${REMOTE_URL}/usuarios/${getUserId}`).then(results => {
      setNome(results.data.nome)
    })
  }

  async function editarNome() {
    await axios.put(`${REMOTE_URL}/usuarios/${getUserId}`, {
      nome: nome
    }, {
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    }).then(results => {
      alert('Nome atualizado!')
      pegarNome()
    })
  }

  const refresh = useIsFocused();
  useEffect(() => {
    if (route.params) {
      const { token } = route.params;
      setToken(token);
      const { userId } = route.params;
      setUserId(userId);
    }

    pegarNome()
  }, [refresh])

  return (
    <View style={styles.container}>
      <NomeDaPagina nomePagina="Editar informaçoes do seu perfil" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView>
          <View style={styles.fotoPet}>
            <Text style={styles.descricaoFotoPet}>FOTO DO PERFIL</Text>
          </View>
          <View style={styles.blocoInterno}>
            <Text style={styles.Text}>Nome</Text>
            <TextInput
              placeholder="Insira o seu nome"
              onChangeText={value => setNome(value)}
              value={nome}
              style={
                focusComponent === "name"
                  ? {
                    ...styles.bloco,
                    ...{ borderColor: "#772583", borderWidth: 2 },
                  }
                  : styles.bloco
              }
              onFocus={() => {
                setFocusComponent("name");
              }}
            />

            {/* <Text style={styles.Text}>Mudar Senha</Text>
            <TextInput
              placeholder="Insira a sua senha"
              onChangeText={onChangeNumber}
              value={number}
              style={
                focusComponent === "senha"
                  ? {
                    ...styles.bloco,
                    ...{ borderColor: "#772583", borderWidth: 2 },
                  }
                  : styles.bloco
              }
              onFocus={() => {
                setFocusComponent("senha");
              }}
              keyboardType="numeric"
            />

            <Text style={styles.Text}>Email</Text>
            <TextInput
              placeholder="Insira o seu e-mail"
              onChangeText={onChangeText}
              value={text}
              style={
                focusComponent === "e-mail"
                  ? {
                    ...styles.bloco,
                    ...{ borderColor: "#772583", borderWidth: 2 },
                  }
                  : styles.bloco
              }
              onFocus={() => {
                setFocusComponent("e-mail");
              }}
            /> */}

            <Button onPress={() => editarNome()}
              title="Salvar"
              color={THEME.COLORS.PRIMARY}

            ></Button>

          </View>
        </SafeAreaView>
      </ScrollView>

      <Footer
        homePress={() => navigation.navigate("Home", { userId: getUserId, token: getToken })}
        anuncioPress={() => navigation.navigate("AnuncioPet", { userId: getUserId, token: getToken })}
        chatPress={() => navigation.navigate("Conversations", { userId: getUserId, token: getToken })}
        perfilPress={() => navigation.navigate("Perfil", { userId: getUserId, token: getToken })}
      />
    </View>
  );
}
