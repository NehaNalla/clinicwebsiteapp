import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import HospitalCardItem from '../Shared/HospitalCardItem';
import DoctorCardItem from '../Shared/DoctorCardItem';
import { useNavigation } from '@react-navigation/native';

export default function HospitalListBig({ hospitalList }) {
  const navigation=useNavigation();
  return (
    <View style={{marginTop:15}}>
      <FlatList
        data={hospitalList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('hospital-detail',
            {
              hospital:item
            }
          )}>
            <HospitalCardItem hospital={item}/>
          </TouchableOpacity>
        )}
      />
      
    </View>
  );
}