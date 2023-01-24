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
import { REMOTE_URL } from "../../utils/url";

export function TodosOsPets({ route, navigation }) {
  const [search, onChangeSearch] = useState("");
  const [getData, setData] = useState([]);
  const [getToken, setToken] = useState();

  function PetCard({ item }) {
    return (
      <View style={styles.card.first} overflow="hidden">
        <TouchableOpacity
          onPress={() => navigation.navigate("InfoPet", { "petInfo": item })}
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
        `${REMOTE_URL}/pets/user`,
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

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.screen}>
        <SearchBar
          containerStyle={{
            backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent',
            paddingHorizontal: 25
          }}
          inputContainerStyle={{
            backgroundColor: 'white', borderWidth: 1, borderBottomWidth: 1,
            borderColor: 'rgba(139, 139, 139, 0.35)', borderRadius: 16
          }}
          placeholder="Pesquise um pet"
          onChangeText={onChangeSearch}
          value={search}
          lightTheme={true}
        />
        <View>
          <Header
            statusBarProps={{ backgroundColor: 'transparent' }}
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
