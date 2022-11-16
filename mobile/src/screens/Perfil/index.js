import React from 'react';
import { View, Text, ScrollView, Image,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";


import { styles } from './styles';




export function Perfil({}) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>

      <ScrollView style={styles.scrollView}>
        <View style={styles.bloco}>
          <Image source={require('../../assets/iconeEditarInfo.png')} />
          <Text style={styles.texto} onPress={() => { navigation.navigate('EditarInformacoes') }}>Editar informações do perfil</Text>
        </View>

        <View style={styles.bloco}>
          <Image source={require('../../assets/iconSeusPets.png')} />
          <Text style={styles.texto} onPress={() => { navigation.navigate('PetsAnunciados') }}>Seus pets anunciados</Text>
        </View>

        <View style={styles.bloco}>
          <Image source={require('../../assets/iconExcluirConta.png')} />
          <Text style={styles.texto} onPress={() => { navigation.navigate('ExcluirContaModal') }}>Excluir conta</Text>
        </View>
        
        <View style={styles.bloco}>
          <Image source={require('../../assets/iconSairDaConta.png')} />
          <Text style={styles.texto} onPress={() => { navigation.navigate('SairDaContaModal') }}>Sair da conta</Text>
        </View>
      </ScrollView>
    </View>
  );
}