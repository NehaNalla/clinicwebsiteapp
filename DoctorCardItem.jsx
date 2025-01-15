import { View, Text } from 'react-native'
import React from 'react'

export default function DoctorCardItem() {
  return (
    <View>
  <Text
    style={{
      fontFamily: 'appfont',
      color: 'pink',
      marginTop: 3,
    }}
  >
    {doctor.name}
  </Text>

  <View>
    <TouchableOpacity
      style={{
        marginTop: 10,
        padding: 10,
        backgroundColor: 'pink',
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: 'pink',
          textAlign: 'center',
          fontFamily: 'appfont-semi',
        }}
      >
        Make an Appointment
      </Text>
    </TouchableOpacity>
  </View>
</View>
  )
}