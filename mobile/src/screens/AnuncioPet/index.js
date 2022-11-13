import React from 'react';
import { Button, View, ScrollView } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput, Text, Image } from "react-native";
import theme from '../../theme';


import { styles } from './styles';


export function AnuncioPet() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [focusComponent, setFocusComponent] = React.useState("");

  return (
    <View style={styles.container}>
        <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.fotoPet}>
            <Text style={styles.descricaoFotoPet}>ADICIONAR FOTO DO PET</Text>
          </View>
          <Text style={styles.Text}>Nome do Pet</Text>
          <TextInput
            placeholder='Insira o nome do Pet'
            onChangeText={onChangeText}
            value={text}
            style={focusComponent === "name" ? { ...styles.bloco, ...{ borderColor: "#772583", borderWidth: 2 } } : styles.bloco}
            onFocus={() => {
              setFocusComponent("name") 
            }}
          />
          <Text style={styles.Text}>Idade</Text>
          <TextInput
            placeholder='Insira a idade do Pet'
            onChangeText={onChangeNumber}
            value={number}
            style={focusComponent === "idade" ? { ...styles.bloco, ...{ borderColor: "#772583", borderWidth: 2 } } : styles.bloco}
            onFocus={() => {
              setFocusComponent("idade")
            }}
            keyboardType="numeric"
          />
          <Text style={styles.Text}>Raça</Text>
          <TextInput
            placeholder='Insira a raça do Pet'
            onChangeText={onChangeText}
            value={text}
            style={focusComponent === "raça" ? { ...styles.bloco, ...{ borderColor: "#772583", borderWidth: 2 } } : styles.bloco}
            onFocus={() => {
              setFocusComponent("raça")
            }}
          />
          <Text style={styles.Text}>Sexo</Text>
          <TextInput
            placeholder='Insira o sexo do Pet'
            onChangeText={onChangeText}
            value={text}
            style={focusComponent === "sexo" ? { ...styles.bloco, ...{ borderColor: "#772583", borderWidth: 2 } } : styles.bloco}
            onFocus={() => {
              setFocusComponent("sexo")
            }}
          />
          <Button title="Publicar" color="#772583" style={theme.primaryButton}></Button>
      </ScrollView>
        </SafeAreaView>
    </View>
  );
}
