import { View, Image, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyledText } from '@/components/StyledText';
import { Stack } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { recentDestinations } from '@/data/data';
// import { Video } from 'expo-av';

const Profile = () => {

    const [selectedIcon, setSelectedIcon] = React.useState<string>('AntDesign');
    const iconNames = ['AntDesign', 'Ionicons', 'MaterialCommunityIcons'];
    const Icons: Record<string, React.ElementType> = {
        AntDesign: AntDesign,
        Ionicons: Ionicons,
        MaterialCommunityIcons: MaterialCommunityIcons,
    };


    return (
        <View className='bg-blue-100'>
            <View className="mt-20 px-5 mb-10">
                <Stack.Screen options={{ headerShown: false }} />
                <View className="items-center flex-row justify-between mt-5" >
                    <Ionicons name="chevron-back" size={20} color="black" className='bg-white rounded-full p-2' />
                    <StyledText weight='bold' className=' text-3xl '>Profile</StyledText>
                    <MaterialCommunityIcons name="dots-vertical" size={20} color="black" className='bg-white rounded-full p-2' />

                </View>
            </View>
            <View className='bg-white rounded-t-3xl h-full pt-5 '>
                <View className='px-5'>
                    <View className='items-center'>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} className='rounded-full p-12 ml-5 ' />
                        <StyledText weight='bold' className='text-2xl ml-3'>Antony Thomas</StyledText>
                        <StyledText className='text-center ml-3 text-gray-400'>antony@gmail.com</StyledText>
                    </View>
                    <View className='flex-row justify-around mt-5'>
                        <View className='items-center'>
                            <StyledText weight='bold' className='text-2xl' >15</StyledText>
                            <StyledText>Post</StyledText>
                        </View>
                        <View className='items-center'>
                            <StyledText weight='bold' className='text-2xl'>1534</StyledText>
                            <StyledText>Followers</StyledText>
                        </View>
                        <View className='items-center'>
                            <StyledText weight='bold' className='text-2xl'>151</StyledText>
                            <StyledText>following</StyledText>
                        </View>
                    </View>
                    <View className='mt-5 flex-row justify-around'>
                        <Pressable className='bg-blue-100 rounded-3xl py-3 mt-5 px-12'>
                            <StyledText className='text-center'>Edit Profile</StyledText>
                        </Pressable>
                        <Pressable className=' rounded-3xl py-3 mt-5 px-12 border border-blue-100'>
                            <StyledText className='text-center'>Share Profile</StyledText>
                        </Pressable>
                    </View>
                    <View className='mt-5 '>
                        <View className='flex-row ml-3 '>
                            <View>
                                <AntDesign name="plus" size={24} color="black" className='bg-blue-100 rounded-full p-4' />
                                <StyledText className='text-center'>New</StyledText>
                            </View>
                            <View>
                                <Image source={{ uri: 'https://images.unsplash.com/photo-1553608622-8c715b1b5145?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} className='rounded-full p-8 ml-5 ' />
                                <StyledText className='text-center ml-5'>New York</StyledText>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View className='flex-row justify-around mt-5'>
                            <TouchableOpacity onPress={() => setSelectedIcon("picture")} className='items-center'>
                                <AntDesign name="picture" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedIcon("keyboard")} className='items-center'>
                                <MaterialCommunityIcons name="keyboard" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedIcon("video")} className='items-center'>
                                <MaterialCommunityIcons name="video-outline" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedIcon("star")} className='items-center'>
                                <Ionicons name="star-outline" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View className='items-center mt-5 '>
                            {selectedIcon === 'picture' && (
                                <View className='flex-row justify-between p-2'>
                                    <Image
                                        source={{ uri: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                        style={{ width: 170, height: 200, borderRadius: 10 }}
                                        className='mr-2 ml-2'
                                    />
                                    <Image
                                        source={{ uri: 'https://images.unsplash.com/photo-1496871455396-14e56815f1f4?q=80&w=668&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                        style={{ width: 170, height: 200, borderRadius: 10 }}
                                    />
                                </View>
                            )}
                            {selectedIcon === 'keyboard' && (
                                <StyledText className="text-lg font-bold">You clicked the Keyboard icon!</StyledText>
                            )}
                            {selectedIcon === 'video' && (
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1503642551022-c011aafb3c88?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                    style={{ width: 300, height: 200, borderRadius: 10 }}
                                />
                            )}
                            {selectedIcon === 'star' && (
                                <StyledText className="text-lg font-bold">You clicked the star icon!</StyledText>
                            )}

                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default Profile;