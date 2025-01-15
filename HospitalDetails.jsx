import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import HospitalInfo from '../Components/HospitalDetail/HospitalInfo';




export default function HospitalDetails() {
    const [hospital,setHospital]=useState();
    const param=useRoute().params;
    const navigation=useNavigation();
    useEffect(()=>{
        setHospital(param.hospital);
    },[param]);
  return hospital&&(
    <View style={{flex:1,backgroundColor:'white'}}>
        <ScrollView>
        <View>
        <PageHeader title={''}/>
        </View>
      
      <View>
        {/*<Image source={{uri:hospital.Image.url}}
                 style={{
                    width:'100%',
                    height:140,
                    borderTopLeftRadius:10,
                    borderTopRightRadius:10
                 }}
              />*/}
       <View style={{marginTop:-2,backgroundColor:'pink',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding:20
       }}> 
        <HospitalInfo hospital={hospital}/>
       </View>
      </View>
      </ScrollView>
      <TouchableOpacity
          onPress={()=>navigation.navigate('book-appointment',{
            hospital:hospital
          })}
      style={{
        padding:13,
        backgroundColor:'black',
        margin:10,
        borderRadius:99,
        left:0,
        right:0,
        marginBottom:10,
        zIndex:20
      }}>
          <Text style={{color:'pink',
            textAlign:'center',
            fontFamily:'appfont-semi',
            fontSize:17
          }}>
             Book Appointment
          </Text>
      </TouchableOpacity>
    </View>
  )
}