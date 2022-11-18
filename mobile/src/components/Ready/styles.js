import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textos: {
    margin: 40,
    alignItems: 'center'
  },
  sucesso: {
    color: THEME.COLORS.TEXT_BLACK,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: 26
  },
  texto: {
    marginTop: 10,
    width: '100%',
    color: THEME.COLORS.TEXT_BLACK,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 22
  },
  botao: {
    height: 50,
    width: 350,
    backgroundColor: '#772583',
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    color: 'white',
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD
  }
});