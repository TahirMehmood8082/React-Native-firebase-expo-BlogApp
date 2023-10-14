import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Post1 = () => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{
          uri: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg',
        }}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>JAVASCRIPT</Text>
        <Text style={styles.cardText}>
          JavaScript is the world's most popular lightweight, interpreted compiled programming language. It is also known as a scripting language for web pages. It is well-known for the development of web pages, and many non-browser environments also use it. JavaScript can be used for client-side development as well as server-side development.
        </Text>
        <Text style={styles.readMore}>Read More</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
  cardImage: {
    width: 20,
    height: 250,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
  },
  readMore: {
    marginTop: 10,
    color: 'blue',
  },
});

export default Post1;
