import { View, TextInput } from 'react-native'; // Import Text from 'react-native'
import React, { useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import registerStyle from '../../ProjectStyles/RegisterStyle'

const Email = ({email, setEmail}) => { // Use capitalized name
  return (
    <View style={registerStyle.emailContainer}>
      <MaterialIcons
          style={{ marginLeft: 8 }}
          name="email"
          size={24}
          color="gray"
        />  
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={registerStyle.emailTextInput}
        placeholder="enter your Email"
      ></TextInput>
    </View>
  );
};

export default Email; // Export with capitalized name
