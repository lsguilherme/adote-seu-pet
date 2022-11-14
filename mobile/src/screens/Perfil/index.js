import { React, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, SafeAreaView } from 'react-native';

import { Footer } from "../../components/Footer";
import { NomeDaPagina } from "../../components/NomeDaPagina";

import { styles } from './styles';

import { SairDaContaModal } from "./SairDaContaModal";
import { ExcluirContaModal } from "./ExcluirContaModal";


export function Perfil() {

  const [visibleModal, setVisibleModal] = useState(false);

  const [excluirContaModall, setExcluirContaModall] = useState(false);  

  return (
    <SafeAreaView>

      <NomeDaPagina nomePagina="Conta" />

      <View style={styles.backgroundColor}>
        <View style={styles.container}>

          <ScrollView style={styles.scrollView}>

            <View style={styles.bloco}>
              <Image source={require('../../assets/iconeEditarInfo.png')} />
              <Text style={styles.texto}>Editar informações do perfil</Text>
            </View>

            <View style={styles.bloco}>
              <Image source={require('../../assets/iconSeusPets.png')} />
              <Text style={styles.texto}>Seus pets anunciados</Text>
            </View>

            <View onPress={{}} style={styles.bloco}>
              <Image source={require('../../assets/iconFavoritos.png')} />
              <Text style={styles.texto}>Pets favoritados</Text>
            </View>

            <TouchableOpacity onPress={() => setExcluirContaModall(true)}>
              <View style={styles.bloco}>
                <Image source={require('../../assets/iconExcluirConta.png')} />
                <Text style={styles.texto}>Excluir conta</Text>
              </View>

              <Modal
                visible={excluirContaModall}
                transparent={true}
                onRequestClose={() => setExcluirContaModall(false)}>
                <ExcluirContaModal
                  closeModal={() => setExcluirContaModall(false)} />
              </Modal>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setVisibleModal(true)}>
              <View style={styles.bloco}>
                <Image source={require('../../assets/iconSairDaConta.png')} />
                <Text style={styles.texto}>Sair da conta</Text>
              </View>

              <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}>
                <SairDaContaModal
                  closeModal={() => setVisibleModal(false)} />
              </Modal>
              
            </TouchableOpacity>
          </ScrollView>

          <Footer />

        </View>
      </View>
    </SafeAreaView>
  );
}