import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/App1/Services/GlobalApi'

export default function Slider() {
  //const [sliderList,setSliderList]=useState();
    const sliderList=[
        {
            id:1,
            name:'Slider 1',
            imageUrl:'https://mobisoftinfotech.com/resources/wp-content/uploads/2015/06/Buckasur_thumbnail_11.jpg'
        },
        {
            id:2,
            name:'Slider 2',
            imageUrl:'https://mobisoftinfotech.com/resources/wp-content/uploads/2015/06/Buckasur_thumbnail_11.jpg'
        }
    ]

   // useEffect(()=>{
   //getSlider();
    //},[])

    //const getSlider=()=>{
      //GlobalApi.getSlider().then(resp=>{
        //console.log(resp.data);
        //setSliderList(resp.data.data)
      //})
    //}
  return (
    <View style={{marginTop:10}}>
      <FlatList
          data={sliderList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=>(
            <Image source={{uri:item.imageUrl}}
                    style={{width:300,
                    height:100,
                    borderRadius:10,
                    margin:2,
                    //resizeMode:'contain'
                   }}
                   
            />
          )}
      />

    </View>
  )
}