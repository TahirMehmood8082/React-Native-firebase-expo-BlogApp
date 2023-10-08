import { View, TextInput } from 'react-native'; // Import Text from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import registerStyle from '../../ProjectStyles/RegisterStyle'

const Name = ({name, setName}) => { // Use capitalized name
  return (
    <View style={registerStyle.nameContainer}>
      <Ionicons
        name="ios-person"
        size={24}
        color={"gray"}
        marginLeft={{ marginLeft: 8 }}
      />
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={registerStyle.nameText}
        placeholder="enter your name"
      ></TextInput>
    </View>
  );
};

export default Name; // Export with capitalized name
