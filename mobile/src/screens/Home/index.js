import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image, Text, Modal, Alert, Pressable } from 'react-native';
// import { THEME } from '../../theme';

import { styles } from './styles';
import Footer from '../../components/Footer';

export function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectValue, setSelectValue] = useState('Localização');

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.selectLocal}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.selectLocal.texto}>{selectValue}</Text>
          <Image source={require('../../assets/icons/arrow-down.png')} />
        </TouchableOpacity>

        <View style={styles.selectLocal.pesquisa}>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/search.png')} />
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

        <ScrollView style={[styles.modal.container, { width: 275, maxHeight: 275 }]}>
          <Pressable
            onPress={() => {
              setModalVisible(false)
              setSelectValue('Jaboatão dos Guararapes')
            }}
          >
            <Text style={styles.modal.item}>Jaboatão dos Guararapes</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setModalVisible(false)
              setSelectValue('Recife')
            }}
          >
            <Text style={styles.modal.item}>Recife</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setModalVisible(false)
              setSelectValue('Olinda')
            }}
          >
            <Text style={[styles.modal.item, styles.modal.last]}>Olinda</Text>
          </Pressable>
        </ScrollView>
      </Modal>

      <View style={styles.banner} overflow='hidden'>
        <Image
          style={styles.bannerImage}
          resizeMode="contain"
          source={require('../../assets/pet-images/pet-1.jpg')} />
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
            <Image source={require('../../assets/pet-icons/cat-icon.png')} />
          </View>
          <Text style={styles.petMenu.texto}>Gatos</Text>
        </View>

        <View style={styles.petMenu.item}>
          <View style={styles.petMenu.icon}>
            <Image source={require('../../assets/pet-icons/dog-icon.png')} />
          </View>
          <Text style={styles.petMenu.texto}>Cães</Text>
        </View>

        <View style={styles.petMenu.item}>
          <View style={styles.petMenu.icon}>
            <Image source={require('../../assets/pet-icons/hamster-icon.png')} />
          </View>
          <Text style={styles.petMenu.texto}>Hamsters</Text>
        </View>

        <View style={styles.petMenu.item}>
          <View style={styles.petMenu.icon}>
            <Image source={require('../../assets/pet-icons/bird-icon.png')} />
          </View>
          <Text style={styles.petMenu.texto}>Passaros</Text>
        </View>

        <View style={styles.petMenu.itemLast}>
          <View style={styles.petMenu.iconPlus}>
            <Image source={require('../../assets/pet-icons/plus-icon.png')} />
          </View>
          <Text style={styles.petMenu.texto}>Mais</Text>
        </View>
      </ScrollView>

      <View style={styles.pets.labels}>
        <Text style={styles.pets.label}>10 Pets por perto</Text>
        <Text style={styles.pets.link}>ver todos</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollPets}
      >

        <View style={[styles.card.container, styles.card.first]} overflow='hidden'>
          <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
            <Image source={require('../../assets/pet-images/pet-1.jpg')} />
            <Text style={styles.card.nome}>Fox</Text>
            <View style={styles.card.conteudo.box}>
              <Text style={styles.card.conteudo.local}>
                Jaboatão dos Guararapes Jaboatão dos Guararapes
              </Text>
              <Image source={require('../../assets/pet-icons/pet-macho.png')} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.card.container} overflow='hidden'>
          <Image source={require('../../assets/pet-images/pet-2.jpg')} />
          <Text style={styles.card.nome}>Fox</Text>
          <View style={styles.card.conteudo.box}>
            <Text style={styles.card.conteudo.local}>Muribeca</Text>
            <Image source={require('../../assets/pet-icons/pet-macho.png')} />
          </View>
        </View>

        <View style={[styles.card.container, styles.card.last]} overflow='hidden'>
          <Image source={require('../../assets/pet-images/pet-3.jpg')} />
          <Text style={styles.card.nome}>Fox</Text>
          <View style={styles.card.conteudo.box}>
            <Text style={styles.card.conteudo.local}>Largo da paz</Text>
            <Image source={require('../../assets/pet-icons/pet-macho.png')} />
          </View>
        </View>
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
}