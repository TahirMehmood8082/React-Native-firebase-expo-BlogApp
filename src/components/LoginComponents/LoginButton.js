import { Pressable, Text } from 'react-native'
import React from 'react'
import LoginStyle from '../../ProjectStyles/LoginStyle';

const LoginButton = ({handleLogin}) => {
  return (
    <Pressable 
      onPress={handleLogin}
      style={LoginStyle.loginBtn}>
      <Text style={LoginStyle.loginBtnTxt}>
        Login
      </Text>
    </Pressable>
  )
}

export default LoginButton 