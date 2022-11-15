import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { Perfil } from "./src/screens/Perfil";
import { Ready } from "./src/components/Ready";
import { Inicio } from './src/screens/Inicio';
import { LoginECadastro } from './src/screens/LoginECadastro';
import { Home } from './src/screens/Home';
import { AnuncioPet } from './src/screens/AnuncioPet';
import { Conversations } from './src/screens/Conversations';
import { Chat } from "./src/screens/Chat";


import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {

  const { Navigator, Screen } = createNativeStackNavigator();
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });


  if (!fontsLoaded) {
    return null;
  } else {
    return (

      <NavigationContainer>

        <StatusBar
          backgroundColor='transparent'
          translucent
        />
        <Stack.Navigator initialRouteName='Inicio' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Perfil" component={Perfil} />
          <Stack.Screen name="Ready" component={Ready} />
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="LoginECadastro" component={LoginECadastro} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AnuncioPet" component={AnuncioPet} />
          <Stack.Screen name="Conversations" component={Conversations} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
        <StatusBar style={'auto'} />

      </NavigationContainer>

    );
  }
}
const styles = StyleSheet.create({
  container: {

  }
});

