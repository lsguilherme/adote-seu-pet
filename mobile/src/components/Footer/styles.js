import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 0,
    width: '100%',
  },
  linha: {
    height: 1,
    width: '100%',
    backgroundColor: '#D7D7D7'
  },
  icones: {
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
  },
  blocoIcones: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '25%'
  }
});