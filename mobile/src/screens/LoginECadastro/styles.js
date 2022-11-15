import { StatusBar, StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  logo: {
    marginTop: 60,
    marginBottom: 65,
  },
  title: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 47,
    justifyContent: 'center'
  },
  input: {
    borderRadius: 16, 
    width:340, 
    height:64,
    paddingLeft: 15,
    backgroundColor: THEME.COLORS.BACKGROUND,
    
  },
  label: {
    color: 'black',
    marginLeft: 6,
    marginBottom: 5,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },

  botaoContainer:{
    width: 340,
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
  cadastro: {
    marginTop:20, 
    width: 340, 
    alignItems:'center',
    color: THEME.COLORS.TEXT_PURPLE
  }

});