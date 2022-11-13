import { React, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';

import { styles } from './styles';
import { ActionModal } from "./ActionModal";


export function Perfil() {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={styles.backgroundColor}>
      <View style={styles.container}>

        <Modal
          visible={visibleModal}
          transparent={true}
          
          onRequestClose={() => setVisibleModal(false)}
        >
          <ActionModal
            closeModal={() => setVisibleModal(false)} />
        </Modal>


        <ScrollView style={styles.scrollView}>
          <View style={styles.bloco}>
            <Image source={require('../../assets/iconeEditarInfo.png')} />
            <Text style={styles.texto}>Editar informações do perfil</Text>
          </View>

          <View style={styles.bloco}>
            <Image source={require('../../assets/iconSeusPets.png')} />
            <Text style={styles.texto}>Seus pets anunciados</Text>
          </View>

          <View style={styles.bloco}>
            <Image source={require('../../assets/iconFavoritos.png')} />
            <Text style={styles.texto}>Pets favoritados</Text>
          </View>

          <View style={styles.bloco}>
            <Image source={require('../../assets/iconExcluirConta.png')} />
            <Text style={styles.texto}>Excluir conta</Text>
          </View>

          <TouchableOpacity onPress={() => setVisibleModal(true)}>
            <View style={styles.bloco}>
              <Image source={require('../../assets/iconSairDaConta.png')} />
              <Text style={styles.texto}>Sair da conta</Text>
            </View>
          </TouchableOpacity>


        </ScrollView>
      </View>
    </View>
  );
}