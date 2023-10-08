import { View, Text } from 'react-native'; // Import Text from 'react-native'
import React from 'react';
import registerStyle from '../../ProjectStyles/RegisterStyle'

const RegisterTitle = () => { // Use capitalized name
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={registerStyle.titleText}>
        Register to your Account{" "}
      </Text>
    </View>
  );
};

export default RegisterTitle; // Export with capitalized name
