import {
  Text,
  View,
  TextInput,
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
            <View>
              {" "}
              <Text>Name: {user.name}</Text>
              <Text>Name: {user.age}</Text>
              <TouchableOpacity onPress={updateUser(user.id, user.age)}>Increase Age</TouchableOpacity>
              <TouchableOpacity onPress={deleteUser(user.id)}>Delete User</TouchableOpacity>
            </View>
          )
        })}
        
      </View>
    </>
  );
};

export default CrudScreen;

