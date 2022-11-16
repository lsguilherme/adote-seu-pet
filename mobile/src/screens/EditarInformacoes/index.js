import React from "react";
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


import { Footer } from "../../components/Footer";
import { NomeDaPagina } from "../../components/NomeDaPagina";

import { styles } from "./styles";

export function EditarInformacoes() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [focusComponent, setFocusComponent] = React.useState("");
  const navigation = useNavigation()


  return (
    <View style={styles.container}>
      <NomeDaPagina />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView>
          <View style={styles.fotoPet}>
            <Text style={styles.descricaoFotoPet}>FOTO DO PERFIL</Text>
          </View>
          <View style={styles.blocoInterno}>
            <Text style={styles.Text}>Nome</Text>
            <TextInput
              placeholder="Insira o seu nome"
              onChangeText={onChangeText}
              value={text}
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
            <Text style={styles.Text}>Mudar Senha</Text>
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
            />
            
            <Button onPress={() => { navigation.navigate('PetsAnunciados') }}
              title="Salvar"
              color={THEME.COLORS.PRIMARY}

            ></Button>

          </View>
        </SafeAreaView>
      </ScrollView>
      <Footer />
    </View>
  );
}
