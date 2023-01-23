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
  Modal,
  Pressable
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";
import { LOCAL_URL, REMOTE_URL } from "../../utils/url";

export function Cadastro({ navigation }) {
  const [getEmail, setEmail] = useState();
  const [getNome, setNome] = useState();
  const [getSenha, setSenha] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [getCodigo, setCodigo] = useState();

  async function validarCodigo() {
    await axios.post(`http://192.168.0.112:5001/totp/`, {
      email: getEmail
    }).then(response => {
      axios.post(`http://192.168.0.112:5001/email/validar`, {
        email: getEmail,
        nome: getNome,
        totp: response.data.totp
      }).then(response => {
        alert("Código de verificação enviado!");
      }).catch(err => {
        alert(err);
      })
    }).catch(err => {
      alert(err);
    })

    setModalVisible(true)
  }

  async function cadastrar() {
    await axios.post(`http://192.168.0.112:5001/totp/validar`, {
      email: getEmail,
      totp: getCodigo
    }).then(response => {
      setCodigo("");
      if (response.data.totp === "VALIDO") {
        alert("Email Confirmado!");

        axios.post(`${REMOTE_URL}/usuarios/`, {
          email: getEmail,
          senha: getSenha,
          nome: getNome,
        }).then(response => {
          setEmail("");
          setSenha("");
          setNome("");
          alert("Criado com sucesso!");
          navigation.navigate("Login");

          setModalVisible(!modalVisible);
        }).catch(error => {
          alert(error);
        });

      } else if (response.data.totp === "EXPIRADO") {
        alert("Código expirado!");
      } else {
        alert("Código inválido!");
      }
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#FFF', borderRadius: 18, width: '80%', paddingVertical: 40, paddingHorizontal: 30 }}>
            <Text style={{
              fontFamily: THEME.FONT_FAMILY.SEMI_BOLD, color: THEME.COLORS.TEXT_GRAY, fontSize: 22, marginBottom: 15, textAlign: 'center'
            }}>Código de Verificação</Text>

            <TextInput
              style={{
                borderRadius: 16,
                height: 48,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '700',
                backgroundColor: '#EEE',
                marginVertical: 20
              }}
              value={getCodigo}
              maxLength={6}
              onChangeText={(value) => setCodigo(value)}
              keyboardType="numeric"
            />

            <Pressable style={{ borderRadius: 14, marginTop: 10, padding: 12, backgroundColor: '#bbb' }}
              onPress={() => {
                setCodigo()
                setModalVisible(!modalVisible)
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Cancelar</Text>
            </Pressable>

            <Pressable style={{ borderRadius: 14, marginTop: 10, padding: 12, backgroundColor: THEME.COLORS.PRIMARY }}
              onPress={() => { cadastrar() }}>
              <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Confirmar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
        onPress={() => validarCodigo()}
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
