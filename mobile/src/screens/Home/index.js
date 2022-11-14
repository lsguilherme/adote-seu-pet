import React from 'react';
import { SafeAreaView, View, ScrollView, Image, Text } from 'react-native';
// import { THEME } from '../../theme';

import { styles } from './styles';


export function Inicio({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>

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

        <View style={styles.card.first} overflow='hidden'>
          <Image source={require('../../assets/pet-images/pet-1.jpg')} />
          <Text style={styles.card.nome}>Fox</Text>
          <View style={styles.card.conteudo.box}>
            <Text style={styles.card.conteudo.local}>
              Jaboatão dos Guararapes Jaboatão dos Guararapes
            </Text>
            <Image source={require('../../assets/pet-icons/pet-macho.png')} />
          </View>
        </View>

        <View style={styles.card.container} overflow='hidden'>
          <Image source={require('../../assets/pet-images/pet-2.jpg')} />
          <Text style={styles.card.nome}>Fox</Text>
          <View style={styles.card.conteudo.box}>
            <Text style={styles.card.conteudo.local}>Muribeca</Text>
            <Image source={require('../../assets/pet-icons/pet-macho.png')} />
          </View>
        </View>

        <View style={styles.card.last} overflow='hidden'>
          <Image source={require('../../assets/pet-images/pet-3.jpg')} />
          <Text style={styles.card.nome}>Fox</Text>
          <View style={styles.card.conteudo.box}>
            <Text style={styles.card.conteudo.local}>Largo da paz</Text>
            <Image source={require('../../assets/pet-icons/pet-macho.png')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}