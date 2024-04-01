import { StyleSheet } from "react-native";
import COLORS from "./constants/colors";

export const styles = StyleSheet.create({
    container: {
      paddingTop: 80,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer1: {
        height: 70,
        width: 70,
        borderRadius: 20,
        position: "absolute",
        top: 35,
        left: 45,
        transform: [
          { translateX: 50 },
          { translateY: 50 },
          { rotate: "-15deg" }
        ]
    },
    imageContainer2: {
        height: 200,
        width: 200,
        borderRadius: 20,
        position: "absolute",
        top: 110,
        left: 100,
        transform: [
          { translateX: 50 },
          { translateY: 50 },
          { rotate: "-15deg" }
        ]
    },
    imageContainer3a: {
        height: 50,
        width: 50,
        borderRadius: 20,
        position: "absolute",
        top: -10,
        left: 150,
        transform: [
          { translateX: 80 },
          { translateY: 70 },
          { rotate: "-5deg" }
        ]
    },
    imageContainer3b: {
        height: 90,
        width: 90,
        borderRadius: 20,
        position: "absolute",
        top: 150,
        left: -30,
        transform: [
          { translateX: 50 },
          { translateY: 50 },
          { rotate: "15deg" }
        ]
    },
    contentContainer: {
        paddingHorizontal: 22,
        position: "absolute",
        top: 400,
        width: "100%",
    },
    contentText1: {
        fontSize: 50,
        fontWeight: '800',
        color: COLORS.white
    },
    contentText2: {
        fontSize: 46,
        fontWeight: '800',
        color: COLORS.white
    },
    contentText2: {
        fontSize: 46,
        fontWeight: '800',
        color: COLORS.white
    },
    contentText3: {
        fontSize: 16,
        color: COLORS.white,
        marginVertical: 4
    },
    contentText4: {
        fontSize: 16,
        color: COLORS.white,
    },
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 22,
        width: "100%"
    },
    signupView: {
        padding: 20
    }
  });