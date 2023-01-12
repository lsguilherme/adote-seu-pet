import { StyleSheet, Platform } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  headerContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
    height: 180,
  },
  logoContainer: {
    paddingHorizontal: 50,
    marginTop: 10,
  },
  logo: {
    height: 80,
    width: 80,
  },
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT_GRAY,
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
