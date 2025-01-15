import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { Text, View, Button, TouchableOpacity, Dimensions } from 'react-native'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { useWarmUpBrowser } from '@/app/hooks/warmUpBrowser'

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive({ session: createdSessionId })
      } else {
        // Use signIn or signUp returned from startOAuthFlow
        // for next steps, such as MFA
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error("OAuth error",err)
    }
  }, []);

  return (
    <TouchableOpacity
          onPress={onPress}
          styles={{padding:16,
            backgroundColor:'pink',
            borderRadius:90,
            alignItems:'center',
            marginTop:20,
            width:Dimensions.get('screen').width*0.8,
          }}>
          <Text style={{fontSize:17,color:'red',backgroundColor:'blue'}}>Login With Google</Text>
          </TouchableOpacity>
  )
}
export default SignInWithOAuth;