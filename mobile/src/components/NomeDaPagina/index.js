import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

//<NomeDaPagina nomePagina="EXEMPLO"/>

export function NomeDaPagina(props) {
  return (
    <View style={styles.container}>

      <View style={styles.textAndImage}>
        <Image onPr style={styles.tamanho} source={require('../../assets/iconBack.png')} />
        <Text style={styles.texto}>{props.nomePagina}</Text>
      </View>

      <View style={styles.linha}></View>

    </View>
  );
}