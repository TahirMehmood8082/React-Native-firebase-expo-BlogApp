import { Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import homeStyle from '../../ProjectStyles/HomeStyle'

const AddAAddress = ({modalVisible, setModalVisible, selectedAddress }) => {
  return (
    <Pressable
      onPress={() => setModalVisible(!modalVisible)}
      style={homeStyle.addAAddressLocationModal}
    >
    <Ionicons name="location-outline" size={24} color="black" />

    <Pressable>
    {selectedAddress ? (
      <Text>
        Deliver to {selectedAddress?.name} - {selectedAddress?.street}
      </Text>
      ) : (
      <Text style={homeStyle.addAAddressTxt}>
          Add a Address
      </Text>
      )}
    </Pressable>
      <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
    </Pressable>
  )
}

export default AddAAddress 