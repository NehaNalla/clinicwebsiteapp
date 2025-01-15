import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // or 'react-native-vector-icons/Ionicons'
import { useUser } from '@clerk/clerk-react'; // Assuming you're using Clerk for user authentication

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        gap:9 // Optional for spacing
      }}>
      <View style={{ display:'felx',flexDirection: 'row', alignItems: 'center',gap:7 }}>
        <Image source={{uri:user.imageUrl}} style={{width:45,height:45,borderRadius:99}}/>
        <View style={{justifyContent:'space-between'}}>
        <Text style={{fontFamily:'appfont'}}>
          Hello,
        </Text>
        <Text style={{ fontSize: 20,fontFamily:'appfont-bold', color: '#2F7D65' }}>
          {user?.fullName || 'Guest'} {/* Customize this as per your logic */}
        </Text>
        </View>
        <Ionicons name="notifications-outline" size={30} color="black" />
      </View>
    </View>
  );
}