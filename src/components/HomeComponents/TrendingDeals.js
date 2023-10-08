import { Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import {deals} from '../../Constants/Constants'
import homeStyle from '../../ProjectStyles/HomeStyle'

const TrendingDeals = () => {
  return (
    <>
      <Text style={homeStyle.trendingDealsTxt}>
        Trending Deals of the week
      </Text>

      <View style={ homeStyle.trendingDealsMainView } >
        {deals.map((item, index) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Info", {
                id: item.id,
                title: item.title,
                price: item?.price,
                carouselImages: item.carouselImages,
                color: item?.color,
                size: item?.size,
                oldPrice: item?.oldPrice,
                item: item,
              })
            }
            style={homeStyle.trendingDealsItemPress}>
            <Image
              style={homeStyle.trendingDealsItemImg}
              source={{ uri: item?.image }}
            />
          </Pressable>
        ))}
      </View>
    </>
  )
}

export default TrendingDeals 