import { Pressable, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import registerStyle from '../../ProjectStyles/RegisterStyle'

const RegisterAlreadyAccount = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={{ marginTop: 15 }}>
      <Text style={registerStyle.alreadyAccTxt}>
        Already have an account? Sign In
      </Text>
    </Pressable>
  )
}

export default RegisterAlreadyAccount 