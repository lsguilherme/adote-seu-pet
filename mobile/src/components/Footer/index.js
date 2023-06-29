import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import usePersist from "../../hooks/usePersist";
import { useNavigation } from "@react-navigation/native";

export function Footer() {
  const { tokenStored, userStored } = usePersist();
  const navigation = useNavigation();

  return (
    <View transparent={true} style={styles.container}>
      <View style={styles.linha}></View>

      <View style={styles.icones}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Home", {
              userId: userStored,
              token: tokenStored,
            })
          }
          style={styles.blocoIcones}
        >
          <Image source={require("../../assets/IconInicio.png")} />
          <Text style={styles.texto}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AnuncioPet", {
              userId: userStored,
              token: tokenStored,
            })
          }
          style={styles.blocoIcones}
        >
          <Image source={require("../../assets/iconAnunciar.png")} />
          <Text style={styles.texto}>Anunciar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Conversations", {
              userId: userStored,
              token: tokenStored,
            })
          }
          style={styles.blocoIcones}
        >
          <Image source={require("../../assets/iconConversas.png")} />
          <Text style={styles.texto}>Conversas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Perfil", {
              userId: userStored,
              token: tokenStored,
            })
          }
          style={styles.blocoIcones}
        >
          <Image source={require("../../assets/iconConta.png")} />
          <Text style={styles.texto}>Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
