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
              <TextInput style={styles.input} />
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


        <View>
          <ScrollView>
            <View style={{flexDirection: "row", alignItems: 'center', marginTop:50}}>
              <View>
                <Text style={{fontSize: THEME.FONT_SIZE.LG, fontFamily: THEME.FONT_FAMILY.SEMI_BOLD, color: THEME.COLORS.TEXT_GRAY}}>Olá! </Text>
                <Text style={{fontSize: THEME.FONT_SIZE.LG, fontFamily: THEME.FONT_FAMILY.SEMI_BOLD, color: THEME.COLORS.TEXT_GRAY}}>Crie uma conta </Text>
                <Text style={{fontSize: THEME.FONT_SIZE.LG, fontFamily: THEME.FONT_FAMILY.SEMI_BOLD, color: THEME.COLORS.TEXT_GRAY}}>para adotar seu novo</Text>
                <Text style={{fontSize: THEME.FONT_SIZE.LG, fontFamily: THEME.FONT_FAMILY.SEMI_BOLD, color: THEME.COLORS.TEXT_GRAY}}>amiguinho.</Text>
              </View>
              <Image 
                source={require("../../assets/Logo-Cadastro.png")}
                style={{height:90, width:90, marginBottom:80}}
              />
            </View>

            <View>
              <Text style={[styles.label, {marginTop: 20}]}>Nome</Text>
              <TextInput style={styles.input} />
            </View>

            <View>
              <Text style={[styles.label, {marginTop: 25}]}>E-mail</Text>
              <TextInput style={styles.input} />
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
              onPress={() => navigation.navigate("Inicio")}
              underlayColor={THEME.COLORS.PRIMARY}
            >
              <Text style={styles.name}>CADASTRAR</Text>
            </TouchableHighlight>

            <TouchableOpacity
              style={styles.cadastro}
              onPress={() =>
                navigation.navigate("LoginECadastro", { login: true })
              }
            >
              <Text>Já possui conta?</Text>
              <Text style={{ textDecorationLine: "underline" }}>
                Clique aqui para entrar
              </Text>
            </TouchableOpacity>


          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}
