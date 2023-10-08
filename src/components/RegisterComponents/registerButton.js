import { Pressable, Text } from 'react-native'
import React from 'react'
import registerStyle from '../../ProjectStyles/RegisterStyle'

const RegisterButton = ({handleRegister}) => {
  console.log(handleRegister)
  return (
    <Pressable
      onPress={handleRegister}
      style={registerStyle.registerBtn}>
      <Text
        style={registerStyle.registerBtnTxt}>
            Register
      </Text>
    </Pressable>
  )
}

export default RegisterButton 