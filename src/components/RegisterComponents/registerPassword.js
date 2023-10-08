import { View, TextInput } from 'react-native'; // Import Text from 'react-native'
import React, { useState } from 'react';
import { AntDesign } from "@expo/vector-icons";
import registerStyle from '../../ProjectStyles/RegisterStyle'

const Password = ({password, setPassword}) => { // Use capitalized name
  return (
    <View>
      <View style={registerStyle.passwordView}>
        <AntDesign
        name="lock1"
        size={24}
        color="gray"
        style={{ marginLeft: 8 }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={registerStyle.passwordPlaceholder}
          placeholder="enter your Password"
        ></TextInput>
      </View>
    </View>
  );
};

export default Password; // Export with capitalized name