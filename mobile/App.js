import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import { Perfil } from "./src/screens/Perfil";
import { Ready } from "./src/components/Ready";
import { Inicio } from "./src/screens/Inicio";
import { Login } from "./src/screens/Login";
import { Home } from "./src/screens/Home";
import { AnuncioPet } from "./src/screens/AnuncioPet";
import { Favoritos } from "./src/screens/Favoritos";
import { TodosOsPets } from "./src/screens/TodosOsPets";
import { EditarInformacoes } from "./src/screens/EditarInformacoes";
import { Conversations } from "./src/screens/Conversations";
import { Chat } from "./src/screens/Chat";
import { EditarInformacoesPet } from "./src/screens/EditarInformacoesPet";
import { PetsAnunciados } from "./src/screens/PetsAnunciados";
import { ExcluirContaModal } from "./src/screens/Perfil/ExcluirContaModal";
import { SairDaContaModal } from "./src/screens/Perfil/SairDaContaModal";
import { Cadastro } from "./src/screens/Cadastro";
import { InfoPet } from "./src/screens/InfoPet";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { UserContextProvider } from "./src/context/UserContext";

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
      <UserContextProvider>
        <NavigationContainer>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Navigator
            initialRouteName="Inicio"
            screenOptions={{ headerShown: false }}
          >
            <Screen name="Inicio" component={Inicio} />
            <Screen name="Home" component={Home} />
            <Screen name="Perfil" component={Perfil} />
            <Screen name="Ready" component={Ready} />
            <Screen name="Login" component={Login} />
            <Screen name="Cadastro" component={Cadastro} />
            <Screen name="AnuncioPet" component={AnuncioPet} />
            <Screen name="Conversations" component={Conversations} />
            <Screen name="EditarInformacoes" component={EditarInformacoes} />
            <Screen name="TodosOsPets" component={TodosOsPets} />
            <Screen name="Favoritos" component={Favoritos} />
            <Screen name="Chat" component={Chat} />
            <Screen
              name="EditarInformacoesPet"
              component={EditarInformacoesPet}
            />
            <Screen name="InfoPet" component={InfoPet} />
            <Screen name="PetsAnunciados" component={PetsAnunciados} />
            <Screen name="ExcluirContaModal" component={ExcluirContaModal} />
            <Screen name="SairDaContaModal" component={SairDaContaModal} />
          </Navigator>
        </NavigationContainer>
      </UserContextProvider>
    );
  }
}
