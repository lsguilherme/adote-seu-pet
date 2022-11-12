import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


import { Login } from './src/screens/Login';

export default function App() {
  
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
      <NavigationContainer>

        <StatusBar
          backgroundColor='transparent'
          translucent
        />
        <Navigator screenOptions={{headerShown: false}}>
          <Screen name="Login" component={Login}/>
        </Navigator>

     </NavigationContainer>
  );
}