import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab';
import HospitalListBig from '../Components/HospitalDoctorsScreen/HospitalListBig';
import GlobalApi from '../Services/GlobalApi';

export default function HospitalDoctorsListScreen() {
  const[hospitalList,setHospitalList]=useState([]);
  const param = useRoute().params;
  const [activeTab,setActiveTab]=useState('Hospital');
useEffect(()=>{
    getHospitalsByCategory();
},[])


  const getHospitalsByCategory=()=>{
    GlobalApi.getHospitalsByCategory(param?.categoryName).then(resp=>{
      setHospitalList(resp.data.data);
    })
  }

  return (
    <View style={{padding:20}}>
      
      <PageHeader title={param?.categoryName}/>
      <HospitalDoctorTab activeTab={(value)=>setActiveTab(value)}/>

       {!hospitalList?.length
       ?<ActivityIndicator size={'large'}
       color={'pink'}
       style={{marginTop:'50%'}}/>
       :
       activeTab=='Hospital'?
       <HospitalListBig hospitalList={hospitalList}/>
       :<Text>Doctor List</Text>
      }
      
      
    </View>
  );
}