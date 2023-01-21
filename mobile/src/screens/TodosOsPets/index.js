import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import { styles } from "./styles";
import { SearchBar } from "react-native-elements";

import { Footer } from "../../components/Footer";
import { useState } from "react";
import axios from "axios";

export function TodosOsPets({ route, navigation }) {
  const [search, onChangeSearch] = useState("");
  const [getData, setData] = useState([]);
  const [getToken, setToken] = useState();

  function PetCard({ item }) {
    return (
      <View style={styles.card.first} overflow="hidden">
        <TouchableOpacity
          onPress={() => navigation.navigate("InfoPet", { getData })}
        >
          <Image
            source={{ uri: item.imagem }}
            style={{ width: 154, height: 173 }}
          />
          <Text style={styles.card.nome}>{item.nome}</Text>
          <View style={styles.card.conteudo.box}>
            <Text style={styles.card.conteudo.local}>
              Jaboatão dos Guararapes
            </Text>
            <Image
              source={
                item.sexo.toLowerCase() == "macho"
                  ? require("../../assets/pet-icons/pet-macho.png")
                  : require("../../assets/pet-icons/pet-femea.png")
              }
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  useEffect(() => {
    if (route.params) {
      const { token } = route.params;
      setToken(token);
    }

    async function resgatarDados() {
      const result = await axios(
        `https://adoteseupet.up.railway.app/pets/user`,
        {
          headers: {
            Authorization: `Beare ${getToken}`,
          },
        }
      );
      setData(result.data);
    }
    resgatarDados();
  }, []);
  console.log(getData);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.screen}>
        <SearchBar
          placeholder="Pesquise um pet"
          onChangeText={onChangeSearch}
          value={search}
          lightTheme={true}
        />
        <View>
          <Header
            leftComponent={{
              icon: "arrow-left",
              color: "#fff",
              iconStyle: { color: "#000000" },
            }}
            centerComponent={{
              text: "Todos os pets por perto",
              style: { color: "#000000" },
            }}
            containerStyle={{
              backgroundColor: "#F3F3F3",
            }}
          />
        </View>
        <FlatList
          data={getData}
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
