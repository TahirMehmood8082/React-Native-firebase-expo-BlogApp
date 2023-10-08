import { Pressable, Text } from 'react-native'
import React from 'react'
import LoginStyle from '../../ProjectStyles/LoginStyle';


const SignupButton = ({navi}) => {
  return (
    <Pressable onPress={() => navi.navigate("Register") } style={LoginStyle.signupBtn}>
      <Text style={LoginStyle.signupBtnTxt}>Don't have an account? Sign Up</Text>
    </Pressable>
  )
}

export default SignupButton 