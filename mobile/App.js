import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


import { Inicio } from './src/screens/Inicio';
import { LoginECadastro } from './src/screens/LoginECadastro';
import { Home } from './src/screens/Home';
import { Perfil } from "./src/screens/Perfil";
import { AnuncioPet } from './src/screens/AnuncioPet';
import { Favoritos } from './src/screens/Favoritos';


import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  
  const { Navigator, Screen } = createNativeStackNavigator();

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
        <Navigator screenOptions={{headerShown: false}}>
          <Screen name="Inicio" component={Inicio}/>
          <Screen name="LoginECadastro" component={LoginECadastro}/>
          <Screen name="Home" component={Home}/>
          <Screen name="Favoritos" component={Favoritos}/>
          <Screen name="AnuncioPet" component={AnuncioPet}/>
          <Screen name="Perfil" component={Perfil}/>
        </Navigator>        

     </NavigationContainer>
  );
  }
}

