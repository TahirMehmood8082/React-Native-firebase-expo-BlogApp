import { View, Pressable, Text, ScrollView } from 'react-native'
import React from 'react'
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import homeStyle from '../../ProjectStyles/HomeStyle'

const ChooseLocationBottomModal = (
  {
    modalVisible,
    setModalVisible,
    addresses,
    setSelectedAddress,
    selectedAddress,
    navigation,
  }) => {
  return (
    <BottomModal
      onBackdropPress={() => setModalVisible(!modalVisible)}
      swipeDirection={["up", "down"]}
      swipeThreshold={200}
      modalAnimation={
        new SlideAnimation({
          slideFrom: "bottom",
        })
      }
      onHardwareBackPress={() => setModalVisible(!modalVisible)}
      visible={modalVisible}
      onTouchOutside={() => setModalVisible(!modalVisible)}
    >
    <ModalContent style={homeStyle.locationModalContent}>
      <View style={{ marginBottom: 8 }}>
        <Text style={homeStyle.locationTxt}>
          Choose your Location
        </Text>

        <Text style={homeStyle.deliveryTxt}>
          Select a delivery location to see product availabilty and delivery
          options
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* already added addresses */}
        {addresses?.map((item, index) => (
          <Pressable
          onPress={() => setSelectedAddress(item)}
            style={
              [
                homeStyle.pickUpPointAlreadyAddress,
                {backgroundColor:selectedAddress === item ? "#FBCEB1" : "white"}
              ] 
            }
          >
            <View style={homeStyle.locationItemContainer}>
              <Text style={homeStyle.locationItemName}>
                {item?.name}
              </Text>
              <Entypo name="location-pin" size={24} color="red" />
            </View>

            <Text
              numberOfLines={1}
              style={homeStyle.locationItemHouseNo}
            >
              {item?.houseNo},{item?.landmark}
            </Text>

            <Text
              numberOfLines={1}
              style={homeStyle.locationItemStreet}
            >
              {item?.street}
            </Text>
            <Text
              numberOfLines={1}
              style={homeStyle.locationItemCity}
            >
              India, Bangalore
            </Text>
          </Pressable>
        ))}

        <Pressable
          onPress={() => {
            setModalVisible(false);
            navigation.navigate("Address");
          }}
          style={homeStyle.pickUpPointBox}
        >
          <Text style={homeStyle.pickUpPointTxt}>
            Add an Address or pick-up point
          </Text>
        </Pressable>
      </ScrollView>

      <View style={homeStyle.locationTypesMainView}>
        <View style={homeStyle.locationTypesSubView}>
          <Entypo name="location-pin" size={22} color="#0066b2" />
          <Text style={homeStyle.locationTypesTxt}>
            Enter an Indian pincode
          </Text>
        </View>

        <View style={homeStyle.locationTypesSubView}>
          <Ionicons name="locate-sharp" size={22} color="#0066b2" />
          <Text style={homeStyle.locationTypesTxt}>
            Use My Currect location
          </Text>
        </View>

        <View style={homeStyle.locationTypesSubView}>
          <AntDesign name="earth" size={22} color="#0066b2" />
          <Text style={homeStyle.locationTypesTxt}>
            Deliver outside India
          </Text>
        </View>
        
      </View>
    </ModalContent>
    </BottomModal>
  )
}

export default ChooseLocationBottomModal 