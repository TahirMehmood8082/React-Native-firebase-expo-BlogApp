import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from 'axios'
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import RegisterImage from '../components/RegisterComponents/registerImage'
import RegisterTitle from '../components/RegisterComponents/registerTitle'
import Name from '../components/RegisterComponents/registerName'
import Email from '../components/RegisterComponents/registerEmail'
import Password from '../components/RegisterComponents/registerPassword'
import ForgotPassword from '../components/RegisterComponents/registerForgotPassword'
import RegisterButton from "../components/RegisterComponents/registerButton";
import RegisterAlreadyAccount from '../components/RegisterComponents/registerAlreadyAccount'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'


const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignUp = async () =>{
   try {
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log(user)
   } catch (error) {
    console.log(error.message)
   }
  }
  const handleRegister = () =>{
    const user = {
      name: name,
      email: email,
      password: password,
    }
    console.log(`handleRegister before request: name: ${name}, email: ${email}, password: ${password}`);
    console.log(`handleRegister before request: User parsing: ${user.name} : ${user.email} : ${user.password}`); // Add this line for debugging
    const serverIP = "192.168.100.25"
    //send & post request to the backend API
    axios
      .post(`http://${serverIP}:8000/register`, user)
      .then((respose)=>{
        console.log(respose)
        Alert.alert(
          "Registration Successfull",
          "You have registered successfully"
        )
        setName("")
        setPassword("")
        setEmail("")
      })
      .catch((error)=>{
        Alert.alert(
          "Registration Error",
          "an error occured during registration"
        )
        console.log("registration failed", error)
      })
  }
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <RegisterImage/>
      <KeyboardAvoidingView>
        <RegisterTitle/>
        <View style={{ marginTop: 70 }}>
          <Name name={name} setName={setName}/>
          <Email email={email} setEmail={setEmail}/>
          <Password password={password} setPassword={setPassword}/>
        </View>
        <ForgotPassword/>
        <View style={{ marginTop: 80 }} />
        <RegisterButton handleRegister={handleSignUp}/>
        <RegisterAlreadyAccount/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
