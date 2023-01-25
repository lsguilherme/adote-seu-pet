import React from "react";
import {
  TouchableOpacity,
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
      <NomeDaPagina nomePagina="Anucie o seu pet" />
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
            <Text style={styles.Text}>Raça</Text>
            <TextInput
              placeholder="Insira a raça do Pet"
              onChangeText={onChangeText}
              value={text}
              style={
                focusComponent === "raça"
                  ? {
                    ...styles.bloco,
                    ...{ borderColor: "#772583", borderWidth: 2 },
                  }
                  : styles.bloco
              }
              onFocus={() => {
                setFocusComponent("raça");
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

            <View style={{ marginTop: 20, alignItems: "center" }}>
              <TouchableOpacity style={{
                backgroundColor: THEME.COLORS.PRIMARY,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 16,
                width: '92%',
                borderRadius: 8
              }}
                activeOpacity={0.7}
                onPress={() => { navigation.navigate('PetsAnunciados') }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Publicar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </SafeAreaView>
      </ScrollView>
      <Footer />
    </View>
  );
}
