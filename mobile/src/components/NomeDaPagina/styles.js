import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textAndImage: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
    flexDirection: 'row',
    paddingBottom: 10,
    backgroundColor: 'white',
    width: '100%',    
  },
  linha: {
    height: 1,
    width: '100%',
    backgroundColor: '#D7D7D7',    
  },
  tamanho: {
    backgroundColor: 'white',
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