import { StyleSheet,StatusBar } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    display:"flex",   
    backgroundColor: '#F3F3F3',
    width: '100%',
    height:"100%",
    alignItems: 'center',
  },
  bloco: {
    height: 53,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 8,
    border: 1,
    margin: 9,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardContianer: {
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    
   
  },
  card:{
    width:"50%",
    justifyContent:"center",
    padding:20,
    margin:10
    
    
  },
  cardText:{
    padding:5,
    margin:0
  },
  nomePet:{
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.COLORS.TEXT_GRAY,
    margin:0,
    marginBottom:15

  },
  localPet:{
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.COLORS.TEXT_GRAY,
    
  },
  screen:{
    flex: 1,
    display:"flex",
    paddingTop: StatusBar.currentHeight,
  },
  scroll:{
    flex:1,
    flexWrap:"wrap",
    flexDirection:"row",
    alignContent:"flex-start",
  },
  card: {
    container: {
      width: 154,
      height: 247,
      marginHorizontal: 8,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: THEME.COLORS.CARD_SHADOW,
      flex:1,
      flexDirection:"row",
      flexWrap:"wrap"
    },

    first: {
      width: 140,
      height: 247,
      marginLeft: 25,
      marginRight: 8,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: THEME.COLORS.CARD_SHADOW,
      marginBottom:10,
      

    },
    last: {
      width: 154,
      height: 247,
      marginLeft: 8,
      marginRight: 25,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: THEME.COLORS.CARD_SHADOW
    },

    image: {
      width: '100%'
    },
    nome: {
      fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.COLORS.TEXT_GRAY,
      marginLeft: 8,
      marginTop: 8
    },

    conteudo: {
      box: {
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 12,
        marginBottom: 10
      },

      local: {
        flex: 1,
        width: 1,
        height: 38,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.TEXT_GRAY
      }
    }
  }
});