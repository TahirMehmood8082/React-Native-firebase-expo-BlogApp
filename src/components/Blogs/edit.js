import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { db } from '../../firebase/firebase-config';
import { collection, getDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';

function BlogEdit() {
  const route = useRoute();
  const navigation = useNavigation();
  const blogs = collection(db, "blogs")
  const { id } = route.params;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(blogs, id);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setTitle(data.Title);
          setBody(data.Body);
        } else {
          Alert.alert("Document not found");
        }
      } catch (error) {
        Alert.alert("Error", `Error fetching document: ${id} ` + error.message, [
          {
            text: "OK",
            onPress: () => {
              // Handle the OK button press, if needed
            }
          }
        ]);
      }
    };

    fetchData();
  }, [id]);

  const updatePost = async () => {
    try {
      const docRef = doc(blogs, id);
      await updateDoc(docRef, {
        Title: title,
        Body: body,
        last_Updated: serverTimestamp(),
      });

      Alert.alert("Success", "Data Successfully Updated", [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate('List')
          }
        }
      ]);
      // You can navigate back or perform other actions here
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", `Error updating document: ${id} ` + error.message, [
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
        value={title}
        onChangeText={(text) => setTitle(text)}
        required
      />

      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={10}
        placeholder="Write your content here"
        value={body}
        onChangeText={(text) => setBody(text)}
        required
      />

      <Button title="Submit" onPress={updatePost} />
    </View>
  );
}

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

export default BlogEdit;
