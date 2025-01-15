import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/App1/Services/GlobalApi'
import SubHeading from './SubHeading';
import { useNavigation } from '@react-navigation/native';
//import clinicwebsiteapp from './../assets/images/adaptive-icon.png'

export default function Categories() {

    const navigation=useNavigation();
    const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategories();
  },[])
    const getCategories=()=>{
        GlobalApi.getCategories().then(resp=>{
            //console.log(resp.data.data);
            setCategoryList(resp.data.data)
        })
    }

    if(!categoryList)
    {
        return null;
    }
  return (
    <View style={{marginTop:10}}>
        <SubHeading subHeadingTitle={'Doctor Sepciality'}/>
     <FlatList 
     data={categoryList}
     //numColumns={3}
     renderItem={({item,index})=>(
        
          <TouchableOpacity 
          onPress={()=>navigation.navigate('hospital-doctor-list-screen',
            {
                categoryName:item.name
            })}
          style={{alignItems:'center'}}>
          
           <View style={{
            backgroundColor:'pink',
            padding:15,
            borderRadius:99
           }}>
            
            <Image source={{uri:'https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?ga=GA1.1.1343219213.1720538458&semt=ais_tags_boosted'}}
            style={{
                width:250,
                height:80
            }}
            />
           </View>
                <Text>{item.name}</Text>
           </TouchableOpacity>
     )}
     />
    </View>
  )
}