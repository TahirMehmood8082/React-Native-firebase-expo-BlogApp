import { ScrollView, Pressable, Image, Text } from 'react-native'
import React from 'react'
import {list} from '../../Constants/Constants'
import homeStyle from '../../ProjectStyles/HomeStyle'

const ProductsCategories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {list.map((item, index) => (
        <Pressable
          key={index}
          style={homeStyle.productCategoriesPress}>
          <Image
            style={homeStyle.productCategoriesImg}
            source={{ uri: item.image }}
          />

          <Text style={homeStyle.productCategoriesTxt}>
            {item?.name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  )
}

export default ProductsCategories 