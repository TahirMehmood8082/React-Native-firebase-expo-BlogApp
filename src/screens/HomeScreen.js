import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
 // Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  StatusBar
} from "react-native";
import LoginStyle from '../ProjectStyles/LoginStyle'
//import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from "react";
import { onAuthStateChanged,signOut } from 'firebase/auth'
import { auth } from "../firebase/firebase-config";
import { useNavigation } from "@react-navigation/native";
//import {getDatabase, ref, child, get, set, update, remove} from '@react-native-firebase/'


const HomeScreen = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState({})

  useEffect(() => {
    //getDatabase()
  }, [])
  const getDatabase = async() =>{
    try {
      const data = await firestore()
      .collection('testing')
      .doc('2IxcxkVJNdiuhEvAgm6f')
      .get()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleLogout = async()=>{

    await signOut(auth)
    navigation.navigate("Login")
  }
  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser)
  })
  return (
    <>
      <View>
        <StatusBar backgroundColor="black" />
        <Text style={{backgroundColor:"green"}}>hii {user?.email}</Text>
        <Text>heloooo! new data home </Text>
        <Pressable onPress={handleLogout} style={LoginStyle.signupBtn}>
          <Text style={LoginStyle.signupBtnTxt}>Logout</Text>
         </Pressable>
      </View>
    </>
  );
};

export default HomeScreen;

