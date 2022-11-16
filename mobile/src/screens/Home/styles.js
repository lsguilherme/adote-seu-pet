import { StyleSheet, StatusBar } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },

  selectLocal: {
    width: 275,
    height: 39,
    marginTop: 30,
    marginLeft: 25,
    backgroundColor: THEME.COLORS.BACKGROUND,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,

    texto: {
      fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.COLORS.TEXT_GRAY
    },

    pesquisa: {
      flex: 1,
      with: 57,
      height: 39,
      marginTop: 30,
      marginRight: 25,
      marginLeft: 8,
      borderRadius: 16,
      backgroundColor: THEME.COLORS.BACKGROUND,
      alignItems: 'center',
      justifyContent: 'center'
    }
  },

  modal: {
    container: {
      flex: 1,
      with: 275,
      marginTop: 74,
      marginLeft: 25,
      backgroundColor: '#FFFFFF',
      borderRadius: 16
    },

    item: {
      padding: 12,
      borderBottomColor: 'rgba(79, 79, 79, 0.2)',
      borderBottomWidth: 1,
    },

    last: {
      borderBottomWidth: 0
    }
  },

  banner: {
    flexDirection: 'row',
    width: 340,
    height: 127,
    marginHorizontal: 25,
    marginVertical: 30,
    borderRadius: 16,
    backgroundColor: '#FFF186',
    alignItems: 'center',
  },

  bannerImage: {
    height: 127
  },

  petMenu: {
    titulo: {
      fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.COLORS.TEXT_BLACK,
      marginLeft: 25,
      marginBottom: 14
    },
    scroll: {
      width: '100%',
      maxHeight: 82,
    },
    item: {
      alignItems: 'center',
      marginHorizontal: 8
    },
    itemFirst: {
      alignItems: 'center',
      marginLeft: 25,
      marginRight: 8
    },
    itemLast: {
      alignItems: 'center',
      marginLeft: 8,
      marginRight: 25
    },
    icon: {
      backgroundColor: THEME.COLORS.SECONDARY,
      width: 64,
      height: 64,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 32
    },
    iconPlus: {
      backgroundColor: THEME.COLORS.PRIMARY,
      width: 64,
      height: 64,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 32
    },
    texto: {
      fontFamily: THEME.FONT_FAMILY.REGULAR,
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.COLORS.TEXT_BLACK
    }
  },

  pets: {
    labels: {
      marginHorizontal: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 30,
      marginBottom: 14
    },
    label: {
      fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.COLORS.TEXT_BLACK
    },
    link: {
      fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.COLORS.TEXT_GRAY
    }
  },

  scrollPets: {
    width: '100%'
  },

  card: {
    container: {
      with: 154,
      height: 247,
      marginHorizontal: 8,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: THEME.COLORS.CARD_SHADOW
    },

    first: {
      marginLeft: 25,
      marginRight: 8
    },

    last: {
      marginLeft: 8,
      marginRight: 25
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