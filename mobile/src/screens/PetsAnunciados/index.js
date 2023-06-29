import React from "react";
import { View, Image, Text, SafeAreaView, FlatList } from "react-native";
import { Header } from "react-native-elements";
import { styles } from "./styles";

import { Footer } from "../../components/Footer";

const pets = [
  {
    nome: "Fox 1",
    foto: require("../../assets/pet-images/pet-1.jpg"),
    icone: require("../../assets/pet-icons/pet-macho.png"),
    local: "Jaboatão dos Guararapes",
  },
  {
    nome: "Fox 2",
    foto: require("../../assets/pet-images/pet-2.jpg"),
    icone: require("../../assets/pet-icons/pet-macho.png"),
    local: "Recife",
  },
  {
    nome: "Fox 3",
    foto: require("../../assets/pet-images/pet-3.jpg"),
    icone: require("../../assets/pet-icons/pet-femea.png"),
    local: "Boa Vista",
  },
];

function PetCard({ item }) {
  return (
    <View style={styles.card.first} overflow="hidden">
      <Image source={item.foto} />
      <Text style={styles.card.nome}>{item.nome}</Text>
      <View style={styles.card.conteudo.box}>
        <Text style={styles.card.conteudo.local}>{item.local}</Text>
        <Image source={item.icone} />
      </View>
    </View>
  );
}

export function PetsAnunciados() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.screen}>
        <View>
          <Header
            leftComponent={{
              icon: "arrow-left",
              color: "#fff",
              iconStyle: { color: "#000000" },
            }}
            centerComponent={{
              text: "Seus pets anunciados",
              style: { color: "#000000" },
            }}
            containerStyle={{
              backgroundColor: "#F3F3F3",
            }}
          />
        </View>
        <FlatList
          data={pets}
          renderItem={PetCard}
          keyExtractor={(item) => item.nome}
          numColumns={2}
          horizontal={false}
        />

        <Footer />
      </SafeAreaView>
    </View>
  );
}
