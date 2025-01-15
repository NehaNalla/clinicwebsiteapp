import { View, Text, Image } from 'react-native'
import React from 'react'


export default function HospitalItem({hospital}) {
  return (
    <View style={{width:200,borderRadius:10,
        borderWidth:1,borderColor:'pink',
        borderRadius:10,
        marginRight:11
    }}>
      <Image source={{uri:'https://img.freepik.com/free-vector/hospital-clinic-building-with-ambulance-car-truck_107791-2645.jpg?ga=GA1.1.1343219213.1720538458&semt=ais_tags_boosted'}} 
      style={{width:'100%',height:110,borderTopLeftRadius:10,
        borderTopRightRadius:10
      }}
      />
      <View style={{padding:7}}>
        <Text style={{fontFamily:'appfont-semi',
            fontSize:16
        }}>{hospital.Name}</Text>
        <Text style={{color:'pink'}}>{hospital.Address}</Text>
      </View>
    </View>
  )
}