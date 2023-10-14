import React from 'react';
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Posts = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        <Post1 />
      </View>
      <View style={styles.sidebar}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Posts</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>JavaScript</Text>
            <Text style={styles.listItem}>Data Structure</Text>
            <Text style={styles.listItem}>Algorithm</Text>
            <Text style={styles.listItem}>Computer Network</Text>
          </View>
        </View>
      </View>
      <View style={styles.postContainer}>
        {/* <Post2 /> */}
      </View>
      <View style={styles.postContainer}>
        {/* <Post3 /> */}
      </View>
      <View style={styles.postContainer}>
        {/* <Post4 /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postContainer: {
    marginBottom: 10,
  },
  sidebar: {
    width: '30%',
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Posts;
