import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Menu from './src/components/Menu';
import Ready from "./src/components/Ready";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Menu />
      <Ready text="Pet publicado para adoção" botaotext="Voltar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3'
  },
});
