import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import loginStyle from '../ProjectStyles/LoginStyle'
import AppLogo from '../components/LoginComponents/AppLogo';
import AppTitle from "../components/LoginComponents/AppTitle";
import Email from "../components/LoginComponents/Email";
import Password from "../components/LoginComponents/Password";
import ForgotPassword from "../components/LoginComponents/ForgotPassword";
import LoginButton from "../components/LoginComponents/LoginButton";
import SignupButton from "../components/LoginComponents/SignupButton";
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        console.log(`auth in checkLoginStatus: ${token}`)
        if (token) {
          navigation.replace("Crud");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
   checkLoginStatus();
  }, []);
  const handleLogin = async () =>{
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user)
      console.log(`auth pass by handleLogin : ${password}`)
      AsyncStorage.setItem("authToken", password);
      navigation.replace("Crud");
     } catch (error) {
      console.log(error.message)
     }
  }
  const handleLoginMongo = () =>{
    console.log("Login btn pressed")
    const user = {
      email: email,
      password: password,
    }
    console.log("User data before sending the request:", user); // Add this line for debugging
    const serverIP = "192.168.100.25"

    axios
    .post(`http://${serverIP}:8081/login`, user)
    .then((response) => {
      console.log(`Response from mongodb: ${response}`);
      const token = response.data.token;
      AsyncStorage.setItem("authToken", token);
      ("Home"); 
    })
    .catch((error) => {
      Alert.alert("Login Error", "Invalid Email");
      console.log(error);
    });
  }

  return (
    <SafeAreaView
      style={loginStyle.loginScreenSafeArea}
    >
      <AppLogo/>
      <KeyboardAvoidingView>
        <AppTitle/>
        <View style={{ marginTop: 70 }}>
          <Email email={email} setEmail={setEmail}/>
          <Password password={password} setPassword={setPassword}/>
        </View>
        <ForgotPassword/>
        
        <View style={{ marginTop: 80 }} />
        
        <LoginButton handleLogin={handleLogin}/>
        <SignupButton navi={navigation}/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
