import { React, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { Footer } from "../../components/Footer";
import { NomeDaPagina } from "../../components/NomeDaPagina";

import { styles } from "./styles";

import { SairDaContaModal } from "./SairDaContaModal";
import { ExcluirContaModal } from "./ExcluirContaModal";
import usePersist from "../../hooks/usePersist";

export function Perfil({ navigation }) {
  const { tokenStored, userStored } = usePersist();

  const [visibleModal, setVisibleModal] = useState(false);
  const [excluirContaModall, setExcluirContaModall] = useState(false);

  return (
    <>
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
        <NomeDaPagina nomePagina="Conta" />

        <View style={styles.backgroundColor}>
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EditarInformacoes", {
                    userId: userStored,
                    token: tokenStored,
                  })
                }
              >
                <View style={styles.bloco}>
                  <Image source={require("../../assets/iconeEditarInfo.png")} />
                  <Text style={styles.texto}>Editar informações do perfil</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.bloco}>
                <Image source={require("../../assets/iconSeusPets.png")} />
                <Text style={styles.texto}>Seus pets anunciados</Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("Favoritos")}
              >
                <View onPress={{}} style={styles.bloco}>
                  <Image source={require("../../assets/iconFavoritos.png")} />
                  <Text style={styles.texto}>Pets favoritados</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setExcluirContaModall(true)}>
                <View style={styles.bloco}>
                  <Image
                    source={require("../../assets/iconExcluirConta.png")}
                  />
                  <Text style={styles.texto}>Excluir conta</Text>
                </View>

                <Modal
                  visible={excluirContaModall}
                  transparent={true}
                  onRequestClose={() => setExcluirContaModall(false)}
                >
                  <ExcluirContaModal
                    userId={userStored}
                    token={tokenStored}
                    closeModal={() => setExcluirContaModall(false)}
                  />
                </Modal>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setVisibleModal(true)}>
                <View style={styles.bloco}>
                  <Image source={require("../../assets/iconSairDaConta.png")} />
                  <Text style={styles.texto}>Sair da conta</Text>
                </View>

                <Modal
                  visible={visibleModal}
                  transparent={true}
                  onRequestClose={() => setVisibleModal(false)}
                >
                  <SairDaContaModal closeModal={() => setVisibleModal(false)} />
                </Modal>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>

      <Footer />
    </>
  );
}
