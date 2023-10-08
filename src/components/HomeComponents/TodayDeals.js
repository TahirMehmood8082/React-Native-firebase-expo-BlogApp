import { Text, ScrollView, View, Pressable, Image } from 'react-native'
import React from 'react'
import {offers} from '../../Constants/Constants'
import homeStyle from '../../ProjectStyles/HomeStyle'

const TodayDeals = ({ navigation }) => {
  return (
    <>
      <Text style={homeStyle.todayDealTxt}>
        Today's Deals
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {offers.map((item, index) => (
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
            style={homeStyle.todayDealItemPress}>
            <Image
              style={homeStyle.todayDealItemImg}
              source={{ uri: item?.image }}
            />

            <View style={homeStyle.todayDealUptoMainView}>
              <Text style={homeStyle.todayDealUptoText}>
                Upto {item?.offer}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </>
  )
}

export default TodayDeals 