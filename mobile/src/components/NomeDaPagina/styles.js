import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textAndImage: {
    alignItems: 'center',
    paddingTop: 10,
    flexDirection: 'row',
    paddingBottom: 10,
    width: '100%',    
  },
  linha: {
    height: 1,
    alignSelf: 'center',
    width: 350,
    backgroundColor: '#D7D7D7',
    borderRadius: 50
  },
  tamanho: {
    right: 0,
    marginLeft: 25,
    zIndex: 2,
    
  },
  texto: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  }
});