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
  StatusBar,
  TouchableOpacity
} from "react-native";
import LoginStyle from '../ProjectStyles/LoginStyle'
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from '../firebase/firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'


const CrudScreen = () => {
  const navigation = useNavigation()
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)

  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")

  const createUser = async () =>{
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge)})
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = { age: age + 1 }
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) =>{
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }
    getUsers()
  }, [])
  
  return (
    <>
      <View>
        <StatusBar backgroundColor="black" />
        <TextInput  
          placeholder="Name..." 
          onChangeText={(txt)=> {setNewName(txt)}}
        />
        <TextInput  
          placeholder="Age..." 
          keyboardType="number" 
          onChangeText={(txt) => {setNewAge(txt)}}
        />
        <TouchableOpacity onPress={createUser}>Create User</TouchableOpacity>
        {users.map((user)=>{
          return (
            <div>
              {" "}
              <h1>Name: {user.name}</h1>
              <h1>Name: {user.age}</h1>
              <TouchableOpacity onPress={updateUser(user.id, user.age)}>Increase Age</TouchableOpacity>
              <TouchableOpacity onPress={deleteUser(user.id)}>Delete User</TouchableOpacity>
            </div>
          )
        })}
        
      </View>
    </>
  );
};

export default CrudScreen;

