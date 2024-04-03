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
        height: 60, //img 2
        width: 60,
        borderRadius: 20,
        position: "absolute",
        top: 35,
        left: 15,
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
        height: 30, //img 1
        width: 30,
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
        height: 90, //ing 3
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
        flex: 1,
        marginHorizontal: 9,
        marginVertical: 20,
        padding: 20,
        alignItems: "center",
        paddingTop: 30
    },
    signupText1: {
        fontSize: 34,
        fontWeight: "bold",
        color: COLORS.welcomePrimary,
        textAlign: "center",
        paddingBottom: 25
    },
    signupText2: {
        fontSize: 16,
        color: COLORS.black,
        textAlign: "center"
    },
    signupText3: {
        fontSize: 16,
        color: COLORS.black,
        paddingTop: 50,
        textAlign: "center"
    },
    loginView: {
        flex: 1,
        marginHorizontal: 9,
        marginVertical: 20,
        padding: 20,
        alignItems: "center",
        paddingTop: 40
    },
    loginText1: {
        fontSize: 34,
        fontWeight: "bold",
        color: COLORS.welcomePrimary,
        textAlign: "center",
        paddingBottom: 25
    },
    loginText2: {
        fontSize: 16,
        color: COLORS.black,
        paddingTop: 50,
        textAlign: "center"
    },
    signupTextEmail: {
        fontSize: 16,
        fontWeight: '400',
    },
    inputContainer: {
        width: "100%",
        height: 52,
        flexDirection: "row",
        borderColor: '#adb5bd',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
        backgroundColor: COLORS.white,
        paddingRight: 40
    },
    inputContainerTextInput: {
        width: "100%"
    },
    inputContainerOuter: {
        gap: 28,
        marginVertical: 20,
        display: "flex",
        width: "100%"
    },
    homeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.black
    },
    homeText: {
        fontSize: 70,
        color: '#f9844a',
    } 
  });