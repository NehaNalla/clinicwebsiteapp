import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import GlobalApi from '@/App1/Services/GlobalApi'
import HospitalItem from './HospitalItem';

export default function PremiumHospital() {

    const [hospitalList,setHospitalList]=useState([]);
    useEffect(()=>{
getPremiumHospitals()
    },[])
    const getPremiumHospitals=()=>{
        GlobalApi.getPremiumHospitals().then(resp=>{
            setHospitalList(resp.data.data);
            
        })
    }
  return hospitalList&&(
    <View style={{marginTop:10}}>
      <SubHeading subHeadingTitle={'our premium hosipitals'} />
      <FlatList
         data={hospitalList}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         renderItem={({item,index})=>(
            <HospitalItem hospital={item}/>
         )}
      /> 
    </View>
  )
}