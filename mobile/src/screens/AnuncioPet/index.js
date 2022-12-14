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

import { Footer } from "../../components/Footer";
import { NomeDaPagina } from "../../components/NomeDaPagina";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function AnuncioPet() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [focusComponent, setFocusComponent] = React.useState("");
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <NomeDaPagina nomePagina="Anucie o seu pet"/>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView>
          <View style={styles.fotoPet}>
            <Text style={styles.descricaoFotoPet}>ADICIONAR FOTO DO PET</Text>
          </View>
          <View style={styles.blocoInterno}>
            <Text style={styles.Text}>Nome do Pet</Text>
            <TextInput
              placeholder="Insira o nome do Pet"
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
            <Text style={styles.Text}>Idade</Text>
            <TextInput
              placeholder="Insira a idade do Pet"
              onChangeText={onChangeNumber}
              value={number}
              style={
                focusComponent === "idade"
                  ? {
                    ...styles.bloco,
                    ...{ borderColor: "#772583", borderWidth: 2 },
                  }
                  : styles.bloco
              }
              onFocus={() => {
                setFocusComponent("idade");
              }}
              keyboardType="numeric"
            />
            <Text style={styles.Text}>Ra??a</Text>
            <TextInput
              placeholder="Insira a ra??a do Pet"
              onChangeText={onChangeText}
              value={text}
              style={
                focusComponent === "ra??a"
                  ? {
                    ...styles.bloco,
                    ...{ borderColor: "#772583", borderWidth: 2 },
                  }
                  : styles.bloco
              }
              onFocus={() => {
                setFocusComponent("ra??a");
              }}
            />
            <Text style={styles.Text}>Sexo</Text>
            <TextInput
              placeholder="Insira o sexo do Pet"
              onChangeText={onChangeText}
              value={text}
              style={
                focusComponent === "sexo"
                  ? {
                    ...styles.bloco,
                    ...{ borderColor: "#772583", borderWidth: 2 },
                  }
                  : styles.bloco
              }
              onFocus={() => {
                setFocusComponent("sexo");
              }}
            />
            <Button onPress={() => { navigation.navigate('PetsAnunciados') }}
              title="Publicar"
              color={THEME.COLORS.PRIMARY}

            ></Button>

          </View>
        </SafeAreaView>
      </ScrollView>
      <Footer />
    </View>
  );
}
