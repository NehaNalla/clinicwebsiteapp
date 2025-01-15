import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import App from './../../assets/images/adaptive-icon.png'
import SignInWithOAuth from '../Components/SignInWithOAuth'
export default function Frontpage() {
  return (
    <View style={{alignItems:'center'}}>
     <Image source={App}
     style={styles.appImage}
     ></Image>
     <View style={{backgroundColor:'pink',
      padding:25,
      alignItems:'center',
      marginTop:-50,
      borderTopLeftRadius:20,
      borderBottomRightRadius:20,
      }}>
      <Text style={styles.heading}>Your Ultimate Doctor</Text>
      <Text style={styles.heading}>Your Ultimate Doctor</Text>
      <Text style={{textAlign:'center',marginTop:20}}>Book Appointment and manager your health journey</Text>
      <SignInWithOAuth />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
 appImage:{
  width:300,
  height:300,
  objectFit:'contain',
  marginTop:50
 },
 heading:{
  fontSize:25,
  fontWeight:'bold'
 }
})