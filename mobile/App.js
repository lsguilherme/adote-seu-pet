import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


import { Login } from './src/screens/Login';
import { Cadastro } from './src/screens/Cadastro';
import { Perfil } from "./src/screens/Perfil";
import { AnuncioPet } from './src/screens/AnuncioPet';

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
          <Screen name="AnuncioPet" component={AnuncioPet}/>
          <Screen name="Perfil" component={Perfil}/>
          <Screen name="Login" component={Login}/>
          <Screen name="Cadastro" component={Cadastro}/>
        </Navigator>        

     </NavigationContainer>
  );
  }
}

