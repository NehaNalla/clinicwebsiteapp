import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

export default function ActionButton() {

    const actionButtonList=[
        {
            id:1,
            name:'Website',
            icon:'earth'
        },
        {
            id:2,
            name:'Email',
            icon:'chatbubble-ellipses'
        },
        {
            id:1,
            name:'Phone',
            icon:'md-call'
        }
    ]
  return (
    <View style={{marginTop:5}}>
      <FlatList
         data={actionButtonList}
         columnWrapperStyle={{
            flex:1,
            justifyContent:'space-between'
         }}
         numColumns={3}
         renderItem={({item})=>(
            <TouchableOpacity style={{alignItems:'center'}}>
                <View style={{
                    backgroundColor:'grey',
                    padding:13,
                    borderRadius:99,
                    alignItems:'center',
                    width:55
                }}>
                <Ionicons name={item.icon} size={24} color="black" />
                </View>
                <Text style={{
                    fontFamily:'appfont-semi',
                    marginTop:5
                }}>{item.name}</Text>
            </TouchableOpacity>
         )}
      />
    </View>
  )
}