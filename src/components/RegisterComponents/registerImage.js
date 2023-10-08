import { View, Image } from 'react-native'
import React from 'react'
import registerStyle from '../../ProjectStyles/RegisterStyle'

const AppLogo = () => {
  return (
    <View>
        <Image
          style={registerStyle.logoImg}
          source={{
            url: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>
  )
}

export default AppLogo 