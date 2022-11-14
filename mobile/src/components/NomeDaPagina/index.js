import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

const nomePagina = 'Conta';

export function NomeDaPagina() {
  return (
    <View style={styles.container}>

      <View style={styles.textAndImage}>
        <Image style={styles.tamanho} source={require('../../assets/iconBack.png')} />
        <Text style={styles.texto}>{nomePagina}</Text>
      </View>

      <View style={styles.linha}></View>

    </View>
  );
}