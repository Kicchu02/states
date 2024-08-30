import { StyleSheet } from "react-native";
import { colors } from "./types/Themes";

const style = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.babyPink,
    marginTop: 20,
    margin: 55,
    padding: 20,
    borderRadius: 40,
  },
  butonTextStyle: {
    color: colors.darkGray,
    textAlign: "center",
    fontSize: 20,
  },
  textHeaderStyle: {
    textAlign: "center",
    fontSize: 35,
    marginTop: 150,
    marginBottom: 50,
    color: colors.softCoral,
    fontWeight: "bold",
  },
  choiceButtonStyle: {
    backgroundColor: colors.pastelBlue,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 40,
  },
  questionTextStyle: {
    textAlign: "center",
    fontSize: 35,
    marginTop: 100,
    marginBottom: 50,
    marginHorizontal: 20,
    color: colors.glaucous,
    fontWeight: "bold",
  },
  successTextHeaderStyle: {
    textAlign: "center",
    fontSize: 35,
    marginTop: 150,
    marginBottom: 50,
    color: colors.jadeGreen,
    fontWeight: "bold",
  },
  successMessageStyle: {
    color: colors.jadeGreen,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: colors.neonGreenTranslucent,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    width: "auto",
    alignSelf: "center",
  },
});

export default style;
