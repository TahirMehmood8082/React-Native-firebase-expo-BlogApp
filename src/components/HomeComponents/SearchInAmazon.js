import { View, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import homeStyle from '../../ProjectStyles/HomeStyle'

const SearchInAmazon = () => {
  return (
    <View style={homeStyle.SearchInAmazonMainView}>
    <Pressable style={homeStyle.SearchInAmazonPressable}>
      <AntDesign
        style={{ paddingLeft: 10 }}
        name="search1"
        size={22}
        color="black"
      />
      <TextInput placeholder="Search Amazon.in" />
    </Pressable>

    <Feather name="mic" size={24} color="black" />
    </View>
  )
}

export default SearchInAmazon 