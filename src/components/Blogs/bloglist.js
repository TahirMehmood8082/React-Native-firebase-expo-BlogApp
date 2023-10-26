import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { db } from '../../firebase/firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const BlogList = () => {
  const navigation = useNavigation();
  const [blogsList, setBlogs] = useState([]);
  const blogsCollectionRef = collection(db, "blogs");

  const DeleteBlog = async (id) => {
    try {
      await deleteDoc(doc(blogsCollectionRef, id));
      Alert.alert("Success", "Data Successfully Deleted", [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate('List')
          }
        }
      ]);
    } catch (error) {
      Alert.alert("Error", "Error Removing Document: " + error.message, [
        {
          text: "OK",
          onPress: () => {
            // Handle the OK button press, if needed
          }
        }
      ]);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(blogsCollectionRef);
        const data = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogs(data);
      } catch (error) {
        Alert.alert("Error", "Error Getting Document: " + error.message, [
          {
            text: "OK",
            onPress: () => {
              // Handle the OK button press, if needed
            }
          }
        ]);
      }
    };

    fetchBlogs();
  }, [blogsList]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Blogs List</Text>
      <FlatList
        data={blogsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.blogItem}>
            <Text>Title: {item.Title}</Text>
            <Text>Body: {item.Body}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <Text style={styles.buttonText}>Show</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Edit', { id: item.id })}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => DeleteBlog(item.id)}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Create')}
      >
        <Text style={styles.buttonText}>Create New</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  blogItem: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default BlogList;
