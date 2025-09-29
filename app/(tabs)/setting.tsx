import { useState } from 'react';
import { View, Switch, StyleSheet, Image } from 'react-native';
import { Stack } from 'expo-router';
import { StyledText } from '@/components/StyledText';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';



const Setting = () => {
    const [darkmodeEnabled, setDarkModeEnabled] = useState(false);

    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />
            <View className='mt-8 mx-8'>
                <View className='mt-8 flex flex-row justify-between'>
                    <View className="flex-1 flex-row items-center justify-center mt-8 p-2" >
                        <View className='absolute left-0'>
                            <Ionicons name="chevron-back" size={20} color="black" className="p-2 bg-gray-200 rounded-full" />
                        </View>
                        <StyledText weight="bold" className="text-2xl">Settings</StyledText>
                        <View />
                    </View>
                </View>
                <View className='mt-8 border border-gray-200 py-3 px-4 rounded-lg mb-8'>
                    <View className='flex flex-row items-center justify-between'>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} className='rounded-full w-20 h-20 ' />
                        <View className=''>
                            <StyledText weight='semibold' className='text-lg'>Anthony Thomas</StyledText>
                            <StyledText className='text-gray-700'>Tourist</StyledText>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="black" />
                    </View>
                </View>
                <View>
                    <View>
                        <StyledText className='text-xl mb-5'>other settings</StyledText>
                        <View className='border border-gray-300 rounded-xl py-3'>
                            <View className='flex flex-row items-center justify-between px-2 mb-'>
                                <View className='flex flex-row items-center'>
                                    <Ionicons name="person-sharp" size={16} color="black" />
                                    <StyledText weight='light' className='text-xl px-3'>Profile details</StyledText>
                                </View>
                                <Ionicons name="chevron-forward" size={14} color="black" />
                            </View>
                            <View className='h-px bg-gray-200 mt-1 ' />
                            <View className='flex flex-row items-center justify-between px-2 mb-3'>
                                <View className='flex flex-row items-center'>
                                    <FontAwesome5 name="user-lock" size={16} color="black" />
                                    <StyledText weight='light' className='text-xl px-3 pt-3 '>Password</StyledText>
                                </View>
                                <Ionicons name="chevron-forward" size={14} color="black" />
                            </View>
                            <View className='h-px bg-gray-200 mt-1 ' />
                            <View className='flex flex-row items-center justify-between px-2 '>
                                <View className='flex flex-row items-center'>
                                    <MaterialIcons name="notifications-active" size={16} color="black" />
                                    <StyledText weight='light' className='text-xl px-3 pt-3 pb-2'>Notification</StyledText>
                                </View>
                                <Ionicons name="chevron-forward" size={14} color="black" />
                            </View>
                            <View className='h-px bg-gray-200 mt-1 ' />
                            <View className='flex flex-row items-center justify-between px-2'>
                                <View className='flex flex-row items-center'>
                                    <Ionicons name="moon-sharp" size={16} color="black" />
                                    <StyledText weight='light' className='text-xl px-3'>Dark mode</StyledText>
                                </View>
                                <Switch
                                    value={darkmodeEnabled}
                                    onValueChange={setDarkModeEnabled}
                                />
                            </View>
                        </View>
                    </View>
                    <View className='mt-8'>
                        <View className='mt-8 border border-gray-300 py-5 rounded-lg'>
                            <View className='flex flex-row items-center justify-between px-2 '>
                                <View className='flex flex-row items-center mb-3'>
                                    <AntDesign name="exclamationcircleo" size={16} color="black" />
                                <StyledText className='text-lg px-3'>About Application</StyledText>
                                </View>
                                 <Ionicons name="chevron-forward" size={14} color="black" />
                            </View>
                            <View className='h-px bg-gray-200 mt-1 ' />
                            <View className='flex flex-row items-center justify-between px-2 mt-3 '>
                               <View className='flex flex-row items-center mb-3'>
                                 <MaterialIcons name="message" size={16} color="black" />
                                <StyledText  className='text-lg px-3'>Help/ FAQ</StyledText>
                               </View>
                               <Ionicons name="chevron-forward" size={14} color="black" />
                            </View>
                            <View className='h-px bg-gray-200 mt-1 ' />
                            <View className='flex flex-row items-center justify-between px-2 mt-3'>
                                <View className='flex flex-row items-center'>
                                    <AntDesign name="delete" size={16} color="red" />
                                <StyledText  className='text-lg px-3'>Deactivate my account</StyledText>
                                </View>
                                <Ionicons name="chevron-forward" size={14} color="black" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};



export default Setting;