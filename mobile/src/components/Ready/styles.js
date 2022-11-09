import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%'
  },
  textos: {
    margin: 50,
    alignItems: 'center'
  },
  sucesso: {
    color: THEME.COLORS.TEXT_BLACK,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: 26
  },
  texto: {
    color: THEME.COLORS.TEXT_BLACK,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.LG
  },
  botao: {
    height: 50,
    width: '90%',
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