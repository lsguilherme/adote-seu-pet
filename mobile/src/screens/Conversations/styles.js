import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
  },
  imgText: {
    width: 350,
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    margin: 5,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: '50%',
    marginRight: 13,
  },
  scrollView: {
    height: '100%',
    fontSize: THEME.FONT_SIZE.LG
  },
  Nome: {
   color: '#5C5C5C',
   fontSize: 16,
   fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
  },
  mensagem: {
   fontSize: 14,
   color: '#5C5C5C',
   fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  linha: {
    height: 2,
    width: '100%',
    backgroundColor: '#CECECE', 
    borderRadius: 500
  },
  nomeTitulo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 70,

    width: '100%'
  }

});