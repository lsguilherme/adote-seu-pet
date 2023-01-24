import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { Avatar, Button, Header, Icon } from "react-native-elements";
import { THEME } from "../../theme";
import { useIsFocused } from "@react-navigation/native";

import { styles } from "./styles";
import { REMOTE_URL } from "../../utils/url";
import axios from "axios";

export function InfoPet({ route, navigation }) {
  const [getUserID, setUserID] = useState(route.params.userId);
  const [getToken, setToken] = useState(route.params.token);
  const [info, setInfo] = useState(route.params.petInfo);
  const [getFavorito, setFavorito] = useState(false);

  async function favoritar(id) {
    await axios.post(`${REMOTE_URL}/pets/favorito/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${getToken}`,
      }
    }).then(
      navigation.navigate("Home")
    )
  }

  const refresh = useIsFocused();
  useEffect(() => {
    if (route.params) {
      const { userId } = route.params;
      const { token } = route.params;
      setUserID(userId);
      setToken(token)
    }

    let usuarios = []
    info.petsFavoritos.forEach(element => {
      usuarios.push(element.usuarioId)
    });

    if (usuarios.includes(getUserID)) setFavorito(true)
    else setFavorito(false)
  }, [refresh]);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <Button
            buttonStyle={{
              backgroundColor: "transparent",
              paddingVertical: 2,
              paddingHorizontal: 16,
            }}
            icon={
              <Icon
                name="angle-left"
                type="font-awesome"
                color="black"
                size={36}
              />
            }
            onPress={() => navigation.goBack()}
          />
        }
        centerComponent={{
          text: "Informações do pet",
          style: { color: "#000000", marginTop: 15 },
        }}
        backgroundColor="#F3F3F3"
      />

      <View key={info.id}>
        <Image
          source={{ uri: info.imagem }}
          style={{ width: 400, height: 300 }}
        />

        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <View style={{ width: "80%" }}>
            <Text
              style={{
                marginLeft: 32,
                fontWeight: "bold",
                marginVertical: 8,
                fontSize: THEME.FONT_SIZE.LG,
              }}
            >
              {info.nome}
            </Text>
            <Text style={{ marginLeft: 32, marginBottom: 8 }}>
              Jaboatão dos Guararapes
            </Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity onPress={() => favoritar(info.id)}>
              <Icon name="heart" type="font-awesome" color={getFavorito ? "red" : "lightgray"} size={36} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 16,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              padding: 20,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>{info.idade} anos</Text>
            <Text style={{ fontWeight: "700" }}>Idade</Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              padding: 20,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>
              {info.sexo}
            </Text>
            <Text style={{ fontWeight: "700" }}>Sexo</Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              padding: 20,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>{info.raca}</Text>
            <Text style={{ fontWeight: "700" }}>Raça</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "90%",
              backgroundColor: "white",
              height: 64,
              justifyContent: "center",
              borderRadius: 16,
            }}
            activeOpacity={0.7}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 32,
              }}
            >
              <Avatar
                size="small"
                rounded
                icon={{ name: "user", type: "font-awesome", color: "#ccc" }}
                containerStyle={{ backgroundColor: "grey", marginLeft: 16 }}
              />
              <Text style={{ marginLeft: 12 }}>{info.usuario.nome}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginTop: 16 }}>
          <TouchableOpacity
            style={{
              width: "90%",
              backgroundColor: "#772583",
              justifyContent: "center",
              alignItems: "center",
              padding: 16,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>Adotar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
