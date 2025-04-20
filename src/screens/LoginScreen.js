import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [secureTxt, setSecureTxt] = useState(true);

  return (
    <View style={styles.container}>
      {/* Back Navigation */}
      <TouchableOpacity style={styles.backButtonWraper}>
        <Ionicons
          name={"arrow-back-outline"}
          color={colors.primary}
          size={30}
          onPress={()=>navigation.goBack()}
        />
      </TouchableOpacity>

      {/* Heading */}
      <View style={styles.txtContainer}>
        <Text style={styles.headingTxt}>Hey,</Text>
        <Text style={styles.headingTxt}>Welcome</Text>
        <Text style={styles.headingTxt}>Back</Text>
      </View>

      {/* Input Fields Like Email/Password */}
      <View style={styles.formContainer}>
        {/* Input Email With Email Logo */}
        <View style={styles.inputContainer}>
          <Ionicons name={"mail-outline"} size={30} color={colors.grey} />
          <TextInput
            style={styles.txtInput}
            placeholder="Enter Your Email."
            placeholderTextColor={colors.secondary}
            keyboardType="email-address"
          />
        </View>
        {/* Input Password With Password Logo */}
        <View style={styles.inputContainer}>
          <AntDesign name={"lock"} size={30} color={colors.grey} />
          <TextInput
            style={styles.txtInput}
            placeholder="Enter Your Password."
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureTxt}
          />
          <TouchableOpacity onPress={() => setSecureTxt(!secureTxt)}>
            <SimpleLineIcons name={"eye"} size={20} color={colors.grey} />
          </TouchableOpacity>
        </View>

        {/* Forget Password Text. */}
        <TouchableOpacity>
          <Text style={styles.forgotpaswordtxt}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button Text. */}
        <TouchableOpacity style={styles.loginButtonWraper}>
          <Text style={styles.loginTxt}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.contunuetxt}>or continue with</Text>

        {/* Google Login Button Text. */}
        <TouchableOpacity style={styles.googleButtonWraper}>
          <Image
            source={require("../../assets/google.png")}
            style={styles.googleimg}
          />
          <Text style={styles.googletxt}>Google</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text>Don't have an account?</Text>
          <Text style={{ color: colors.primary, fontWeight: "bold" }}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  backButtonWraper: {
    height: 40,
    width: 40,
    backgroundColor: colors.grey,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  txtContainer: {
    marginVertical: 20,
  },
  headingTxt: {
    fontSize: 32,
    color: colors.primary,
    fontWeight: 350,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    marginVertical: 15,
  },
  txtInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontWeight: "300",
  },
  forgotpaswordtxt: {
    textAlign: "right",
    color: colors.primary,
    fontWeight: 350,
    marginVertical: 10,
  },
  loginButtonWraper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginTop: 20,
  },
  loginTxt: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
  },
  contunuetxt: {
    textAlign: "center",
    marginVertical: 15,
    fontSize: 15,
    color: colors.primary,
  },
  googleButtonWraper: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  googleimg: {
    height: 20,
    width: 20,
  },
  googletxt: {
    fontSize: 20,
    fontWeight: "400",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
});
