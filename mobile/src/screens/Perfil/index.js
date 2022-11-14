import React from 'react';
import { View, Text, ScrollView, Image,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from './styles';




export function Perfil({navigation}) {
  return (
    <View style={styles.container}>

      <ScrollView style={styles.scrollView}>
        <View style={styles.bloco}>
          <Image source={require('../../assets/iconeEditarInfo.png')} />
          <Text style={styles.texto}>Editar informações do perfil</Text>
        </View>

        <View style={styles.bloco}>
          <Button title='Minha Página' onPress= {() => navigation.navigate('AnuncioPet')}></Button>
          <Image source={require('../../assets/iconSeusPets.png')} />
          <Text style={styles.texto}>Seus pets anunciados</Text>
        </View>

        <View style={styles.bloco}>
          <Image source={require('../../assets/iconExcluirConta.png')} />
          <Text style={styles.texto}>Excluir conta</Text>
        </View>
        
        <View style={styles.bloco}>
          <Image source={require('../../assets/iconSairDaConta.png')} />
          <Text style={styles.texto}>Sair da conta</Text>
        </View>
      </ScrollView>
    </View>
  );
}