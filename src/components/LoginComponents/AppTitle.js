import { View, Text } from 'react-native'; // Import Text from 'react-native'
import React from 'react';
import LoginStyle from '../../ProjectStyles/LoginStyle';

const AppTitle = () => { // Use capitalized name
  return (
    <View style={LoginStyle.titleContainer}>
      <Text style={LoginStyle.titleText}>
        Login in to your Account
      </Text>
    </View>
  );
};

export default AppTitle; // Export with capitalized name
