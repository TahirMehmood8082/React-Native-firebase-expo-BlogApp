import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { db } from '../../firebase/firebase-config';
import { collection, getDoc, doc } from 'firebase/firestore'
import { useNavigation } from "@react-navigation/native";

const BlogView = () => {
  const navigation = useNavigation();
  const blogs = collection(db, "blogs")
  const route = useRoute();
  const { id } = route.params;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    // Fetch the data when the component mounts
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
        Alert.alert("Error", "Error Fetching Document: " + error.message, [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate('List')
            }
          }
        ]);
      }
    };

    fetchData();
  }, [id]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  body: {
    fontSize: 18,
  },
});

export default BlogView;
