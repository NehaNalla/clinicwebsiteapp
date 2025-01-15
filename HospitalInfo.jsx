import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import ActionButton from './ActionButton'
import SubHeading from '../Home/SubHeading'
import HorizontalLine from '../Shared/HorizontalLine'

export default function HospitalInfo({hospital}) {
  return (
    <View>
      <Text style={{
        fontSize:23,
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

<HorizontalLine/>
            <View style={{display:'flex',flexDirection:'row',
                gap:5,alignItems:'center'
            }}>
            <Ionicons name="location" size={24} color="black" />
            <Text style={{fontSize:16,
              fontFamily:'appfont',
              color:'grey'
            }}>{hospital.Address}</Text>
            </View>

            <View style={{display:'flex',flexDirection:'row',
                gap:5,alignItems:'center',marginTop:6
            }}>
            <Ionicons name="time" size={24} color="black" />
            <Text style={{fontSize:16,
              fontFamily:'appfont',
              color:'grey'
            }}>Mon Sun | 11AM - 8PM</Text>
            </View>

            <View style={{borderBottomWidth:1,borderColor:'grey',margin:5,marginBottom:10,marinTop:10}}>
  
            </View>

            <ActionButton/>

            <View style={{borderBottomWidth:1,marginTop:15,borderColor:'grey',margin:5,marginBottom:10,marinTop:10}}>
             
  </View>

            <SubHeading subHeadingTitle={'About'}/>
            <Text>{hospital.Description}</Text>

            </View>
    
  )
}