import { useState } from "react";
import {
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Text,
  Image,
} from "react-native";
import { THEME } from "../../theme";

import { Footer } from "../../components/Footer";
import { NomeDaPagina } from "../../components/NomeDaPagina";

import { styles } from "./styles";
import { REMOTE_URL } from "../../utils/url";
import usePersist from "../../hooks/usePersist";

import axios from "axios";
import * as ImagePicker from 'expo-image-picker';


export function AnuncioPet() {
  const { tokenStored } = usePersist();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [raca, setRaca] = useState("");
  const [imagem, setimagem] = useState(null);
  const [focusComponent, setFocusComponent] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      let image = result.assets[0]
      image["nomeArquivo"] = result.assets[0].uri.split('/').pop()
      image["tipoArquivo"] = result.assets[0].uri.split('.').pop()
      setimagem(image);
    }
  };

  async function cadastroPet() {
    let formdata = new FormData();
    formdata.append("nome", nome);
    formdata.append("idade", idade);
    formdata.append("sexo", sexo);
    formdata.append("raca", raca);
    formdata.append("imagem", {
      uri: imagem.uri,
      type: `${imagem.type}/${imagem.tipoArquivo}`,
      name: imagem.nomeArquivo,
    });
    formdata.append("longitude", "");
    formdata.append("latitude", "");
    await axios
      .post(
        `${REMOTE_URL}/pets/`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${tokenStored}`,
            'Content-Type': 'multipart/form-data'
          },
        }
      ).then(() => {
        alert("Cadastrado");
      }).catch((err) => {
        console.log(err)
        alert(err)
      });
  }

  return (
    <View style={styles.container}>
      <NomeDaPagina nomePagina="Anucie o seu pet" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView>
          <TouchableOpacity onPress={pickImage}>
            <View style={[styles.fotoPet, { width: 350, height: 250 }]}>
              {!imagem ? (
                <Text style={styles.descricaoFotoPet}>ADICIONAR FOTO DO PET</Text>
              ) : (
                <Image source={{ uri: imagem.uri }}
                  style={{
                    backgroundColor: 'black',
                    height: "100%",
                    width: '100%',
                    objectFit: 'contain'
                  }} />
              )}
            </View>
          </TouchableOpacity>
          {/* )} */}
          <View style={styles.blocoInterno}>
            <Text style={styles.Text}>Nome do Pet</Text>
            <TextInput
              placeholder="Insira o nome do Pet"
              onChangeText={(text) => setNome(text)}
              value={nome}
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
              onChangeText={(text) => setIdade(text)}
              value={idade}
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
              onChangeText={(text) => setRaca(text)}
              value={raca}
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
              onChangeText={(text) => setSexo(text)}
              value={sexo}
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
              <TouchableOpacity
                style={{
                  backgroundColor: THEME.COLORS.PRIMARY,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 16,
                  width: "92%",
                  borderRadius: 8,
                }}
                activeOpacity={0.7}
                disabled={!imagem || !nome || !idade || !sexo || !raca}
                onPress={cadastroPet}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
                >
                  Publicar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

      <Footer />
    </View>
  );
}
