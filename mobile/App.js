import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


import { Login } from './src/screens/Login';
import { Cadastro } from './src/screens/Cadastro';

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
          <Screen name="Login" component={Login}/>
          <Screen name="Cadastro" component={Cadastro}/>
        </Navigator>        

     </NavigationContainer>
  );
  }
}