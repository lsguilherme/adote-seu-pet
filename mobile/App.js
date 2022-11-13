import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Footer from './src/components/Footer';
import { NomeDaPagina } from './src/components/NomeDaPagina';

import { Perfil } from "./src/screens/Perfil";

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style={'auto'} />


    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    
  }
});
