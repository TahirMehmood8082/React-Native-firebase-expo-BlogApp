import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../../firebase/firebase-config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";

const CreateBlog = () => {
  const navigation = useNavigation();
  const Blogs = collection(db, 'blogs'); 
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createPost = async () => {
    try {
      // Add data to the Firestore
      await addDoc(Blogs, {
        Title: title,
        Body: body,
        publish: false,
        published_on: serverTimestamp(),
      });
      Alert.alert("Success", "Data Successfully Submitted", [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate('List')
          }
        }
      ]);
      setTitle("")
      setBody("")
    } catch (error) {
      Alert.alert("Error", "Error adding document: " + error.message, [
        {
          text: "OK",
          onPress: () => {
            // Handle the OK button press, if needed
          }
        }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
        value={title}
        required
      />

      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={10}
        placeholder="Write your content here"
        onChangeText={(text) => setBody(text)}
        value={body}
        required
      />

      <Button title="Submit" onPress={createPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  textArea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default CreateBlog;
