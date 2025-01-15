import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HospitalCardItem({hospital}) {
  return (
    <View style={{borderRadius:10,marginBottom:20,borderWidth:1,
        borderColor:'pink',borderRadius:10
    }}>
      <Image source={{uri:'https://img.freepik.com/free-vector/hospital-clinic-building-with-ambulance-car-truck_107791-2645.jpg?ga=GA1.1.1343219213.1720538458&semt=ais_tags_boosted'}}
         style={{
            width:'100%',
            height:140,
            borderTopLeftRadius:10,
            borderTopRightRadius:10
         }}
      />
      <View style={{padding:10,backgroundColor:'pink',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
        <Text style={{fontSize:19,
            fontFamily:'appfont-semi'
        }}>{hospital.Name}</Text>
        <FlatList
           data={hospital.category.data}
           horizontal={true}
           renderItem={({item})=>(
             <Text style={{
                marginRight:11,color:'pink'
             }}>{item.Name}</Text>
         )}
        />
        <View style={{borderBottomWidth:1,borderColor:'pink',marginBottom:10}}>
            <View style={{display:'flex',flexDirection:'row',
                gap:5,alignItems:'center'
            }}>
            <Ionicons name="location" size={24} color="black" />
            <Text>{hospital.Address}</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',
                gap:5,alignItems:'center',marginTop:4
            }}>
            <Ionicons name="eye-sharp" size={24} color="black" />
            <Text>659 Views</Text>
            </View>
        </View>
      </View>
    </View>
  )
}