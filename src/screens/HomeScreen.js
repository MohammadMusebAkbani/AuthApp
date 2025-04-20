import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

const navigation=useNavigation();
const openLogin=()=>{
    navigation.navigate("LOGIN")
}

  return (
    <View style={styles.container}>
      <StatusBar />
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Image
        source={require("../../assets/laptop.png")}
        style={styles.laptop}
      />
      <Text style={styles.tittle}>Lorem Ipsum Dolor</Text>

      <Text style={styles.subTittle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore 
      </Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={[styles.loginButtonWraper,{backgroundColor:colors.primary}]}
        onPress={openLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.loginButtonWraper]}>
          <Text style={styles.signUpButtonText}>Sign-Up</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 30,
  },
  laptop: {
    height: 250,
    width: 231,
    marginVertical: 20,
  },
  tittle: {
    fontSize: 40,
    fontWeight: "bold",
    paddingHorizontal: 40,
    textAlign: "center",
    color: colors.primary,
    marginTop: 40,
  },
  subTittle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "350",
    paddingHorizontal: 20,
    color: colors.secondary,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    width: "80%",
    height: 60,
    borderRadius: 98,
  },
  loginButtonWraper: {
    justifyContent: "center",
    alignItems: "center",
    width:"50%",
    borderRadius:100,
  },
  loginButtonText:{
    color:colors.white,
    fontSize:18,
    fontWeight:"400",
  },
  signUpButtonText:{
    fontSize:18,
    fontWeight:"400",
  }
});














