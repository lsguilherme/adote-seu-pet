import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Footer from './src/components/Footer';
import { NomeDaPagina } from './src/components/NomeDaPagina';
import { AnuncioPet } from './src/screens/AnuncioPet';

import { Perfil } from "./src/screens/Perfil";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={{}} />
      <NomeDaPagina />

      {/* <Perfil /> */}
      
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="AnuncioPet" component={AnuncioPet} />
      </Stack.Navigator>
    </NavigationContainer>
    <Footer />

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#F3F3F3'
  },
});
