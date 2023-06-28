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

  inputPassword: {
    paddingLeft: 15,
    backgroundColor: THEME.COLORS.BACKGROUND,
    width: 340,
    height: 48,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
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
  modalContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    width: "80%",
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  modalTitle: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT_GRAY,
    fontSize: 22,
    marginBottom: 4,
    textAlign: "center",
  },
  modalInput: {
    borderRadius: 16,
    height: 48,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    backgroundColor: "#EEE",
    marginVertical: 4,
  },
});
