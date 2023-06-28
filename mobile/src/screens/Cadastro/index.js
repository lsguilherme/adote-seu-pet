import axios from "axios";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { THEME } from "../../theme";

import { styles } from "./styles";

import { LOCAL_URL, REMOTE_URL } from "../../utils/url";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function Cadastro({ navigation }) {
  const schema = yup.object({
    nome: yup.string().required("Informe seu nome!"),
    email: yup.string().email("Email Inválido!").required("Informe seu email!"),
    senha: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 digitos")
      .required("Informe sua senha!"),
    codigo: yup.string(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [hidePass, setHidePass] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  async function validarCodigo(data) {
    await axios
      .post(`${REMOTE_URL}/totp/`, {
        email: data?.email,
      })
      .then((response) => {
        setModalVisible(true);
        axios
          .post(`${REMOTE_URL}/email/validar`, {
            email: data?.email,
            nome: data?.nome,
            totp: response.data.totp,
          })
          .then((response) => {
            alert("Código de verificação enviado!");
          })
          .catch((err) => {
            alert(err);
          });
      })
      .catch((err) => {
        alert(err);
      });
  }

  async function cadastrar(data) {
    await axios
      .post(`${REMOTE_URL}/totp/validar`, {
        email: data?.email,
        totp: data?.codigo,
      })
      .then((response) => {
        if (response.data.totp === "VALIDO") {
          alert("Email Confirmado!");

          axios
            .post(`${REMOTE_URL}/usuarios/`, {
              email: data?.email,
              senha: data?.senha,
              nome: data?.nome,
            })
            .then((response) => {
              alert("Criado com sucesso!");
              setModalVisible(!modalVisible);
              navigation.navigate("Login");
            })
            .catch((error) => {
              alert(error);
            });
        } else if (response.data.totp === "EXPIRADO") {
          alert("Código expirado!");
        } else {
          alert("Código inválido!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        statusBarTranslucent
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBackground}>
            <Text style={styles.modalTitle}>Código de Verificação</Text>

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.modalInput}
                  value={value}
                  placeholder="Código de verificação"
                  maxLength={6}
                  onChangeText={onChange}
                  keyboardType="numeric"
                />
              )}
              name="codigo"
            />
            {errors.codigo && (
              <Text style={{ color: "red", alignSelf: "center" }}>
                {errors.codigo?.message}
              </Text>
            )}

            <TouchableOpacity
              style={{
                borderRadius: 14,
                marginTop: 10,
                padding: 12,
                backgroundColor: "#bbb",
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Cancelar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 14,
                marginTop: 10,
                padding: 12,
                backgroundColor: THEME.COLORS.PRIMARY,
              }}
              onPress={handleSubmit(cadastrar)}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.headerContainer}>
        <View>
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

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.label, { marginTop: 8 }]}>Nome</Text>
              <Text style={{ color: "red", marginLeft: 2 }}>*</Text>
            </View>
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: errors.nome && 1,
                  borderColor: errors.nome && "red",
                },
              ]}
              placeholder="Nome"
              value={value}
              onChangeText={onChange}
            />
          </View>
        )}
        name="nome"
      />
      {errors.nome && (
        <Text style={{ color: "red" }}>{errors.nome?.message}</Text>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.label, { marginTop: 8 }]}>Email</Text>
              <Text style={{ color: "red", marginLeft: 2 }}>*</Text>
            </View>
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: errors.email && 1,
                  borderColor: errors.email && "red",
                },
              ]}
              value={value}
              placeholder="Email"
              onChangeText={onChange}
            />
          </View>
        )}
        name="email"
      />
      {errors.email && (
        <Text style={{ color: "red" }}>{errors.email?.message}</Text>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.label, { marginTop: 8 }]}>Senha</Text>
              <Text style={{ color: "red", marginLeft: 2 }}>*</Text>
            </View>
            <View
              style={[
                styles.inputPassword,
                {
                  borderWidth: errors.senha && 1,
                  borderColor: errors.senha && "red",
                },
              ]}
            >
              <TextInput
                style={{ width: "90%" }}
                value={value}
                placeholder="Senha"
                onChangeText={onChange}
                secureTextEntry={hidePass}
              />
              <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                {hidePass ? (
                  <Icon name="eye" color="#878383" size={24} />
                ) : (
                  <Icon name="eye-off" color="#878383" size={24} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}
        name="senha"
      />
      {errors.senha && (
        <Text style={{ color: "red" }}>{errors.senha?.message}</Text>
      )}

      <TouchableOpacity
        style={[
          styles.botaoContainer,
          { backgroundColor: THEME.COLORS.PRIMARY, marginTop: 24 },
        ]}
        onPress={handleSubmit(validarCodigo)}
        underlayColor={THEME.COLORS.PRIMARY}
        activeOpacity={0.7}
      >
        <Text style={styles.name}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cadastro}
        onPress={() => [navigation.navigate("Login"), reset()]}
      >
        <Text>Já possui conta?</Text>
        <Text style={{ textDecorationLine: "underline" }}>
          Clique aqui para entrar
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
