import { View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import LoginStyle from '../../ProjectStyles/LoginStyle';

const AppLogo = () => {
  return (
    <SafeAreaView
      style={LoginStyle.appLogoSafeArea}
    >
        <Image
          style={LoginStyle.appLogoImg}
          source={require('../../../assets/images/app-logo.png')}
        />
      </SafeAreaView>
  )
}

export default AppLogo 