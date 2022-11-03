import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Text color={THEME.COLORS.TEXT_PURPLE}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
