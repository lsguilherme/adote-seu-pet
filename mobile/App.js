import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


import { Inicio } from './src/screens/Inicio';
import { LoginECadastro } from './src/screens/LoginECadastro';

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
        </Navigator>        

     </NavigationContainer>
  );
  }
}