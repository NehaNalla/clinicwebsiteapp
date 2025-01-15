import { View, Text } from 'react-native'
import React from 'react'

export default function SubHeading({subHeadingTitle,seeAll=true}) {
  return (
    <View style={{display:'flex',
                flexDirection:'row',
                justifyContent:'space-around',
                alignItems:'center',
                marginBottom:10,
                marginTop:10
            }}>
            <Text style={{
                fontSize:20,
                fontFamily:'appfont-semi'
            }}>{subHeadingTitle}</Text>
            {seeAll? <Text style={{fontFamily:'appfont',
                color:'pink'
            }}>See All</Text>:null}
            </View>
  )
}