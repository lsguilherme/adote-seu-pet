import { StatusBar, StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 120,
  },
  title: {
    fontSize: 20,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT_GRAY,
    marginVertical: 24,
  },
  input: {
    borderRadius: 16,
    width: 340,
    height: 48,
    paddingLeft: 15,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  label: {
    color: "black",
    marginLeft: 6,
    marginBottom: 5,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  inputPassword: {
    paddingLeft: 15,
    backgroundColor: THEME.COLORS.BACKGROUND,
    width: 340,
    height: 48,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  botaoContainer: {
    width: 340,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  name: {
    color: THEME.COLORS.TEXT_WHITE,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  cadastro: {
    marginTop: 20,
    width: 340,
    alignItems: "center",
    color: THEME.COLORS.TEXT_PURPLE,
  },
});
