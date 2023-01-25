import { React, useState, useEffect } from 'react';
import { View, Image, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Header, Button } from 'react-native-elements'
import { styles } from './styles';

import { Footer } from "../../components/Footer";

const pets = [
  {
    nome: 'Fox 1',
    foto: require('../../assets/pet-images/pet-1.jpg'),
    icone: require('../../assets/pet-icons/pet-macho.png'),
    local: 'Jaboatão dos Guararapes'
  },
  {
    nome: 'Fox 2',
    foto: require('../../assets/pet-images/pet-2.jpg'),
    icone: require('../../assets/pet-icons/pet-macho.png'),
    local: 'Recife'
  },
  {
    nome: 'Fox 3',
    foto: require('../../assets/pet-images/pet-3.jpg'),
    icone: require('../../assets/pet-icons/pet-femea.png'),
    local: 'Boa Vista'
  },

];

function PetCard({ item }) {

  return (
    <View style={styles.card.first} overflow='hidden'>
      <Image source={item.foto} />
      <Text style={styles.card.nome}>{item.nome}</Text>
      <View style={styles.card.conteudo.box}>
        <Text style={styles.card.conteudo.local}>
          {item.local}
        </Text>
        <Image source={item.icone} />
      </View>
    </View>
  );
}

import { useIsFocused } from "@react-navigation/native";
export function Favoritos({ route, navigation }) {

  const [getToken, setToken] = useState();
  const [getUserId, setUserId] = useState();

  const refresh = useIsFocused();
  useEffect(() => {
    if (route.params) {
      const { token } = route.params;
      setToken(token);
      const { userId } = route.params;
      setUserId(userId);
    }
  }, [refresh])

  return (
    <View style={styles.container}>
      <SafeAreaView>



        <Header
          leftComponent={
            <Button icon={<TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Image source={require('../../assets/iconBack.png')} />
            </TouchableOpacity>}
              buttonStyle={{ backgroundColor: 'transparent' }}
            />}
          centerComponent={{ text: 'Favoritos', style: { color: '#000000', marginTop: 15 } }}
          backgroundColor='#F3F3F3'
        />


        <FlatList data={pets} renderItem={PetCard} keyExtractor={(item) => item.nome} numColumns={2} horizontal={false} />



        <Footer
          homePress={() => navigation.navigate("Home", { userId: getUserId, token: getToken })}
          anuncioPress={() => navigation.navigate("AnuncioPet", { userId: getUserId, token: getToken })}
          chatPress={() => navigation.navigate("Conversations", { userId: getUserId, token: getToken })}
          perfilPress={() => navigation.navigate("Perfil", { userId: getUserId, token: getToken })}
        />

      </SafeAreaView>








    </View >

  );
}