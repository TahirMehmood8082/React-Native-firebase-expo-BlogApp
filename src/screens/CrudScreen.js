import {
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CommonStyles from '../ProjectStyles/CommonStyles'
import CrudStyles from '../ProjectStyles/CrudStyles'
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
    console.log('Inside create User')
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge)})
    setNewName("")
    setNewAge()
  }

  const updateUser = async (id, age) => {
    console.log(`Inside Update User: id-> ${id} age-> ${age}`)
    const userDoc = doc(db, "users", id)
    const newFields = { age: age + 1 }
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) =>{
    console.log(`Inside Delete User: ${id}`)
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    };
    getUsers();
  }, [users]);
  
  return (
    <>
      <StatusBar backgroundColor="black" />
      <ScrollView>
        <View style={CrudStyles.mainView}>
          <Text style={CrudStyles.title}>Crud</Text>
          <TextInput  
            placeholder="Enter Name" 
            value={newName}
            onChangeText={(txt)=> {setNewName(txt)}}
            style={CrudStyles.textInput}
            editable={true}
          />
          <TextInput  
            placeholder="Enter Age" 
            value={newAge !== null && newAge !== undefined ? String(newAge) : ''}
            keyboardType="number-pad" 
            onChangeText={(txt) => {setNewAge(txt)}}
            style={CrudStyles.textInput}
            editable={true}
          />
          <View style={CommonStyles.sectionsDividerLine}></View>
          <TouchableOpacity style={CrudStyles.createBtn} onPress={createUser}><Text style={CrudStyles.btnTxt}>Create User</Text></TouchableOpacity>
          <View style={CommonStyles.sectionsDividerLine}></View>
          {console.log(`No Of Users : ${users.length}`)}
          {users.map((user)=>{
            return (
              <View key={user.id}>
                <Text>Name: {user.name}</Text>
                <Text>Age: {user.age}</Text>
                <TouchableOpacity style={[CrudStyles.btn, {backgroundColor: 'green'}]} onPress={() => updateUser(user.id, user.age)}><Text style={CrudStyles.btnTxt}>Increase Age</Text></TouchableOpacity>
                <TouchableOpacity style={[CrudStyles.btn, {backgroundColor: 'red'}]} onPress={() => deleteUser(user.id)}><Text style={CrudStyles.btnTxt}>Delete User</Text></TouchableOpacity>
                <View style={CommonStyles.sectionsDividerLine}></View>
              </View>
            )
          })}
          
        </View>
      </ScrollView>
    </>
  );
};

export default CrudScreen;

