import { React, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  Pressable,
  FlatList,
} from "react-native";
import { Footer } from "../../components/Footer";
import { ActionMaisModal } from "./ActionMaisModal";
import { useNavigation } from "@react-navigation/native";

// import { THEME } from '../../theme';

import { styles } from "./styles";
import axios from "axios";
import { REMOTE_URL } from "../../utils/url";

export function Home({ route, navigation }) {
  const [getToken, setToken] = useState();
  const [maisModal, setMaisModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectValue, setSelectValue] = useState("Localização");
  const [getData, setData] = useState([]);

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
    <>
      <SafeAreaView style={styles.screen}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.selectLocal}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.selectLocal.texto}>{selectValue}</Text>
            <Image source={require("../../assets/icons/arrow-down.png")} />
          </TouchableOpacity>

          <View style={styles.selectLocal.pesquisa}>
            <TouchableOpacity>
              <Image source={require("../../assets/icons/search.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <ScrollView
            style={[styles.modal.container, { width: 275, maxHeight: 275 }]}
          >
            <Pressable
              onPress={() => {
                setModalVisible(false);
                setSelectValue("Jaboatão dos Guararapes");
              }}
            >
              <Text style={styles.modal.item}>Jaboatão dos Guararapes</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                setModalVisible(false);
                setSelectValue("Recife");
              }}
            >
              <Text style={styles.modal.item}>Recife</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                setModalVisible(false);
                setSelectValue("Olinda");
              }}
            >
              <Text style={[styles.modal.item, styles.modal.last]}>Olinda</Text>
            </Pressable>
          </ScrollView>
        </Modal>

        <View style={styles.banner} overflow="hidden">
          <Image
            style={styles.bannerImage}
            resizeMode="contain"
            source={require("../../assets/pet-images/pet-1.jpg")}
          />
          <Text>Propaganda</Text>
        </View>

        <Text style={styles.petMenu.titulo}>Procurar por categoria</Text>

        <ScrollView
          horizontal={true}
          style={styles.petMenu.scroll}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.petMenu.itemFirst}>
            <View style={styles.petMenu.icon}>
              <Image source={require("../../assets/pet-icons/cat-icon.png")} />
            </View>
            <Text style={styles.petMenu.texto}>Gatos</Text>
          </View>

          <View style={styles.petMenu.item}>
            <View style={styles.petMenu.icon}>
              <Image source={require("../../assets/pet-icons/dog-icon.png")} />
            </View>
            <Text style={styles.petMenu.texto}>Cães</Text>
          </View>

          <View style={styles.petMenu.item}>
            <View style={styles.petMenu.icon}>
              <Image
                source={require("../../assets/pet-icons/hamster-icon.png")}
              />
            </View>
            <Text style={styles.petMenu.texto}>Hamsters</Text>
          </View>

          <View style={styles.petMenu.item}>
            <View style={styles.petMenu.icon}>
              <Image source={require("../../assets/pet-icons/bird-icon.png")} />
            </View>
            <Text style={styles.petMenu.texto}>Passaros</Text>
          </View>

          <TouchableOpacity
            onPress={() => setMaisModal(true)}
            style={styles.petMenu.itemLast}
          >
            <View style={styles.petMenu.iconPlus}>
              <Image source={require("../../assets/pet-icons/plus-icon.png")} />
            </View>
            <Text style={styles.petMenu.texto}>Mais</Text>

            <Modal
              visible={maisModal}
              onRequestClose={() => setMaisModal(false)}
            >
              <ActionMaisModal closeModal={() => setMaisModal(false)} />
            </Modal>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.pets.labels}>
          <Text style={styles.pets.label}>10 Pets por perto</Text>
          <Text
            style={styles.pets.link}
            onPress={() => {
              navigation.navigate("TodosOsPets", { token: getToken });
            }}
          >
            Ver todos
          </Text>
        </View>

        <FlatList
          data={getData}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollPets}
          renderItem={({ item }) => (
            <View
              style={[styles.card.container, styles.card.first]}
              overflow="hidden"
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("InfoPet", { 'petInfo': item })
                }}
              >
                <Image
                  source={{ uri: item.imagem }}
                  style={{ width: 154, height: 174 }}
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
          )}
        />
      </SafeAreaView>

      <Footer />
    </>
  );
}
