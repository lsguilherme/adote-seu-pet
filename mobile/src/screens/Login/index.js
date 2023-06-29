import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { THEME } from "../../theme";

import { styles } from "./styles";
import { REMOTE_URL } from "../../utils/url";
import axios from "axios";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import usePersist from "../../hooks/usePersist";

export function Login({ navigation }) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const { setTokenStored, setUserStored, tokenStored, userStored } =
    usePersist();

  console.log(tokenStored);
  console.log(userStored);
  const schema = yup.object({
    email: yup
      .string()
      .email("Email Inválido!")
      .required("Informe seu email!")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email inválido!"),
    senha: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 digitos")
      .required("Informe sua senha!"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function login(data) {
    await axios
      .post(`${REMOTE_URL}/login`, {
        email: data?.email,
        senha: data?.senha,
      })
      .then(async function (response) {
        const userData = {
          token: response?.data?.token,
          user: response?.data?.usuarioId,
        };

        setTokenStored(userData.token);
        setUserStored(userData.user);

        reset({ email: "", senha: "" });

        navigation.navigate("Home", {
          userId: response.data.usuarioId,
          token: response.data.token,
        });
        setError(false);
      })
      .catch(function (error) {
        if (error.response.status === 401) {
          reset({ email: data?.email, senha: "" });
          setError(true);
          setErrorMessage("Email ou senha inválida!");
        } else {
          setError(true);
          setErrorMessage("Servidor ocupado, tente mais tarde!");
        }
        console.log(error);
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

        {error && (
          <Text style={{ color: "red", alignSelf: "center" }}>
            {errorMessage}
          </Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.label}>Email</Text>
                <Text style={{ color: "red", marginLeft: 2, marginBottom: 8 }}>
                  *
                </Text>
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
          <Text style={{ color: "red", alignSelf: "center" }}>
            {errors.email?.message}
          </Text>
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
                  secureTextEntry={hidePass}
                  placeholder="Senha"
                  value={value}
                  onChangeText={onChange}
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
          <Text style={{ color: "red", alignSelf: "center" }}>
            {errors.senha?.message}
          </Text>
        )}

        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.botaoContainer,
            { backgroundColor: THEME.COLORS.PRIMARY, marginTop: 35 },
          ]}
          onPress={handleSubmit(login)}
          underlayColor={THEME.COLORS.PRIMARY}
        >
          <Text style={styles.name}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cadastro}
          onPress={() => [
            navigation.navigate("Cadastro"),
            reset({ email: "", senha: "" }),
          ]}
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
