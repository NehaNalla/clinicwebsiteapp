import { View, Text, Image } from 'react-native'
import React from 'react'
import PageHeader from '../Shared/PageHeader'
import { Ionicons } from '@expo/vector-icons'
import HorizontalLine from '../Shared/HorizontalLine'

export default function AppointmentHospitalInfo({hospital}) {
  return (
    <View>
      <PageHeader title={'Book Appointment'}/>
      <View>
        <Text style={{
            fontSize:20,
            fontFamily:'appfont-semi',
            marginBottom:8
        }}>{hospital.Name}</Text>
        <View style={{display:'flex',flexDirection:'row',
                gap:5,alignItems:'center'
            }}>
            <Ionicons name="location" size={24} color="black" />
            <Text style={{fontSize:16,
              fontFamily:'appfont',
              color:'grey'
            }}>{hospital.Address}</Text>
            </View>
    </View>
    <HorizontalLine/>
    </View>
  )
}