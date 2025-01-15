import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from '../Home/SubHeading'
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import PageHeader from '../Shared/PageHeader';
import { useUser } from '@clerk/clerk-expo';
import GlobalApi from '@/App1/Services/GlobalApi';
import BookAppointment from '@/App1/Screens/BookAppointment';


export default function BookingSection({hospital}) {
  const { isLoaded, isSignedIn, user } = useUser();
  const[next7Days,setNext7Days]=useState([]);
  const[timeList,setTimeList]=useState([]);

  const [selectedDay,setSelectedDate]=useState();
  const [selectedTime,setSelectedTime]=useState();
  const [notes,setNotes]=useState();
  
  useEffect(()=>{
     getDays();
     getTime();
  },[])
  const getDays=()=>{
    const today=moment();
    const nextSevenDays=[];
    for(let i=0;i<7;i++)
    {
       const date=moment().add(i,'days');
       nextSevenDays.push({
          date:date,
          day:date.format('ddd'),
          formmatedDate:date.format('Do MMM')
       })
    }
    // console.log(nextSevenDays);
    setNext7Days(nextSevenDays);
  }
  const getTime=()=>{
    const timeList=[];
    for(let i=8;i<=12;i++)
    {
      timeList.push({
        time:i+':00 AM'
      })
      timeList.push({
        time:i+':30 AM'
      })
    }
    for(let i=1;i<=6;i++)
      {
        timeList.push({
          time:i+':00 PM'
        })
        timeList.push({
          time:i+':30 PM'
        })
      }

      setTimeList(timeList)
  }


  const BookAppointment = () => {
    const data = {
      data: {
        UserName: user.fullName,
        Date: selectedDay,
        Time: selectedTime,
        Email: user.primaryEmailAddress.emailAddress,
        hospitals: hospital.id,
        Note: notes,
      },
    };
  
    GlobalApi.createAppointment(data).then(resp=> {
      user(resp)
      })

  }
  return (
    <View>
      <Text style={{
        fontSize:18,
        color:'pink'
      }}>Book Appointment</Text>

      <SubHeading subHeadingTitle={'Day'} seeAll={false}/>

      <FlatList
      data={next7Days}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <TouchableOpacity style={
          [styles.dayButton,
            selectedDay==item.date
            ?{backgroundColor:'pink'}
            :null
          ]
        }
           onPress={()=>setSelectedDate(item.date)}
        >
          <Text 
             style={[{
              fontFamily:'appfont',
             },
             selectedDay==item.date
             ?{color:'white'}
             :null
            ]}
          >{item.day}</Text>
          <Text
             style={[{
              fontFamily:'appfont-semi',
              fontSize:16
             },
             selectedDay==item.date
             ?{color:'white'}
             :null
            ]}
          >{item.formmatedDate}</Text>
        
        </TouchableOpacity>
      )}
      />

<SubHeading subHeadingTitle={'Time'} seeAll={false}/>
<FlatList
      data={timeList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <TouchableOpacity style={
          [styles.dayButton,{
             paddingVertical:16,
          },
            selectedTime==item.time
            ?{backgroundColor:'pink'}
            :null
          ]
        }
           onPress={()=>setSelectedTime(item.time)}
        >
          
          <Text
             style={[{
              fontFamily:'appfont-semi',
              fontSize:16
             },
             selectedTime==item.time
             ?{color:'white'}
             :null
            ]}
          >{item.time}</Text>
        
        </TouchableOpacity>
      )}
      />

    <SubHeading subHeadingTitle={'Note'} seeAll={false}/>
    
    <TextInput
     nomberOfLines={3}
     onChange={(value)=>setNotes(value)}
     style={{
       backgroundColor:'pink',
       padding:10,
       borderRadius:10,
       borderColor:'pink',
       borderWidth:1,
       textAlignVertical:'top'
     }}
     placeholder='Write Notes Here'
     />


     <TouchableOpacity
               //onPress={()=>BookAppointment()}
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
                  Make Appointment
               </Text>
           </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
  dayButton:{
    borderWidth:1,
    borderRadius:99,
    padding:5,
    paddingHorizontal:20,
    alignItems:'center',
    marginRight:10
  }
})