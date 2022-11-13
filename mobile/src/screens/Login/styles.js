import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 216,
    height: 216,
    marginTop: 170,
    marginBottom: 143,
  },
  botaoContainer:{
    width: 300,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  name: {
    color: THEME.COLORS.TEXT_WHITE,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
});