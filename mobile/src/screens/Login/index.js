import React from 'react';
import { Image, SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import { THEME } from '../../theme';


import { styles } from './styles';

export function Login({ navigation }) {
  
  return (
    <SafeAreaView style={styles.screen}>
      
      <View style= {{alignItems: 'center'}}>
        <Image 
          source = {require('../../assets/Logo-Inicio.png')}
          style = {styles.logo}
        />
      </View>
      
      <TouchableHighlight 
        style={[
            styles.botaoContainer, 
            {backgroundColor: THEME.COLORS.PRIMARY}
          ]}
        onPress={()=>navigation.navigate('Cadastro',
        {login: true})} 
        underlayColor={THEME.COLORS.PRIMARY}
      >
        <Text style={styles.name}>ENTRAR</Text>
      </TouchableHighlight>

      <TouchableHighlight 
        style={[styles.botaoContainer, {backgroundColor: THEME.COLORS.SECONDARY, marginTop: 15}]} 
        onPress={()=>navigation.navigate('Cadastro', {login: false})} 
        underlayColor={THEME.COLORS.SECONDARY}
      >
        <Text style={styles.name}>CADASTRAR</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}