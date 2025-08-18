import { View, TextInput, Pressable, ImageBackground, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { StyledText } from "@/components/StyledText";
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
   const router = useRouter();
   const [username, setUsername] = React.useState("");
   const [password, setPassword] = React.useState("");
   const [loading, setLoading] = React.useState(false);
   const [isCheckingToken, setIsCheckingToken] = React.useState(true);

   // Move the token check to useEffect
   useEffect(() => {
      const checkToken = async () => {
         try {
            const token = await AsyncStorage.getItem('userToken');
            if (token !== null && token !== undefined) {
               router.replace("/home");
               return;
            }
         } catch (error) {
            console.error('Error checking token:', error);
         } finally {
            setIsCheckingToken(false);
         }
      };
      
      checkToken();
   }, [router]);

   const handleLogin = async () => {
      setLoading(true);
      try {
         const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               username: username,
               password: password
            }),
         });
         
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }

         const data = await response.json();
         console.log("Login successful:", data);
         await AsyncStorage.setItem('userToken', data.accessToken);
         router.replace("/home");
      } catch (error) {
         console.error("Error during login:", error);
      } finally {
         setLoading(false);
      }
   };

   // Show loading while checking token
   if (isCheckingToken) {
      return (
         <View className="flex-1 justify-center items-center">
            <StyledText>Loading...</StyledText>
         </View>
      );
   }

   return (
      <KeyboardAvoidingView
         className="flex-1"
         behavior={'padding'}
         keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
         <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }} 
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
         >
            <ImageBackground
               source={require("../assets/images/login.jpg")}
               className="flex-1 justify-center px-4"
               resizeMode="cover"
            >
               <View className="bg-white/50 backdrop-blur-md px-8 py-8 rounded-lg">
                  <View className="items-center">
                     <StyledText weight="bold" className="text-4xl pb-3">Back on the Road?</StyledText>
                     <StyledText className="text-lg text-gray-500 mb-9">"Let's discover something new"</StyledText>
                  </View>
                  <View>
                     <TextInput
                        className="text-xl border-gray-200 bg-white rounded-2xl py-5 px-5 mb-8"
                        placeholder="Enter Username"
                        value={username}
                        onChangeText={setUsername}
                     />
                     <TextInput
                        className="text-xl border-gray-200 bg-white rounded-2xl py-5 px-5 mb-8"
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                     />
                     <StyledText className="text-right px-4 font-semibold mb-8 text-red-400">Forgot Password?</StyledText>
                     <Pressable 
                        className="bg-[#8adde1] py-3 rounded-3xl" 
                        onPress={handleLogin}
                        disabled={loading}
                     >
                        <StyledText className="text-center text-xl font-semibold">
                           {loading ? "Signing in..." : "Sign in"}
                        </StyledText>
                     </Pressable>
                  </View>
               </View>
            </ImageBackground>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default Login;