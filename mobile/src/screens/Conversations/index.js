import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Footer } from '../../components/Footer';

import { NomeDaPagina } from '../../components/NomeDaPagina';

import Pet1 from "../../assets/pet1.png";
import Pet2 from "../../assets/pet2.png";
import Pet3 from "../../assets/pet3.png";

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

export function Conversations(navigate) {

  const navigation = useNavigation()

  return (
    <>
      <SafeAreaView>
        <NomeDaPagina nomePagina="Conversas" />
        <View style={styles.container}>

          <ScrollView style={styles.scrollView}>

            <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.imgText}>
              <Image style={styles.img} source={Pet2} />
              <View style={styles.nomeTitulo}>
                <Text style={styles.Nome}>Guilherme lá ceda mexicano</Text>
                <Text style={styles.mensagem}>Oi, ainda está disponivel ? te...</Text>
                <View style={styles.linha}></View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.imgText}>
              <Image style={styles.img} source={Pet3} />
              <View style={styles.nomeTitulo}>
                <Text style={styles.Nome}>Matheus cruz evanjelico</Text>
                <Text style={styles.mensagem}>Oi, ainda está disponivel ? te...</Text>
                <View style={styles.linha}></View>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.imgText}>
              <Image style={styles.img} source={Pet1} />
              <View style={styles.nomeTitulo}>
                <Text style={styles.Nome}>Davi Perfeito</Text>
                <Text style={styles.mensagem}>Oi, ainda está disponivel ? te...</Text>
                <View style={styles.linha}></View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.imgText}>
              <Image style={styles.img} source={Pet2} />
              <View style={styles.nomeTitulo}>
                <Text style={styles.Nome}>Jeronimoooooooooooo</Text>
                <Text style={styles.mensagem}>Oi, ainda está disponivel ? te...</Text>
                <View style={styles.linha}></View>
              </View>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </SafeAreaView>

      <Footer
        homePress={() => navigation.navigate("Home", { userId: getUserId, token: getToken })}
        anuncioPress={() => navigation.navigate("AnuncioPet", { userId: getUserId, token: getToken })}
        chatPress={() => navigation.navigate("Conversations", { userId: getUserId, token: getToken })}
        perfilPress={() => navigation.navigate("Perfil", { userId: getUserId, token: getToken })}
      />
    </>
  );
}