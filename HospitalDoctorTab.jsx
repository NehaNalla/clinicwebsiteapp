import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function HospitalDoctorTab({activeTab}) {
    const [activeIndex,setActiveIndex]=useState(0)
  return (
    <View style={{marginTop:10}}>
      <View style={{display:'flex',flexDirection:'row',
        alignItems:'center',justifyContent:'space-around'
      }}>
          <TouchableOpacity 
             style={[
                activeIndex==0
                ?styles.activeTab
                :styles.inActiveTab
             ]}
          onPress={()=>{setActiveIndex(0);activeTab('Hospital')}}>
            <Text style={[
                activeIndex==0
                ?styles.activeText
                :styles.inActiveText
            ]}>Hospital</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={[
            activeIndex==1
            ?styles.activeTab
            :styles.inActiveTab
         ]}onPress={()=>{setActiveIndex(1);activeTab('Doctor')}}>
            <Text style={[
                activeIndex==1
                ?styles.activeText
                :styles.inActiveText
            ]}>Doctors</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}


const styles=StyleSheet.create({
    activeText:{
        textAlign:'center',
        fontFamily:'appfont',
        fontSize:18,
        color:'pink'
    },
    inActiveText:{
        textAlign:'center',
        fontFamily:'appfont',
        fontSize:18,
        color:'black'
    },
    activeTab:{
       borderBottomWidth:2,
       borderBottomColor:'pink',
       padding:3,
       width:'40%'
    },
    inActiveTab:{
        borderBottomWidth:1,
        borderBottomColor:'black',
        padding:3,
        width:'40%'
    }
})