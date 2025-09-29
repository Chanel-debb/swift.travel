import { View, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Stack, useRouter, Link } from 'expo-router';
import { StyledText } from '@/components/StyledText';
import { useState } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { upcomingDestinations } from '../../data/data';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Favourites = () => {
    const router = useRouter();

    return (
        <ScrollView>
            <View >
                <Stack.Screen options={{ headerShown: false }} />
                <View className=" mt-20 px-5">
                    <FontAwesome5
                        name="search-location"
                        size={24}
                        color="black"
                        style={{
                            position: "absolute",
                            right: 16,
                            top: "50%",
                            transform: [{ translateY: -12 }],
                        }}
                    />
                </View>
                <View>
                    <View className='px-10 mt-5'>
                        <StyledText weight='bold' className=' text-3xl '>Favourites</StyledText>
                        <StyledText className='text-gray-400'>Explore your favourite destinations</StyledText>
                    </View>
                </View>
                <View>
                    <View className='mt-5'>
                        {
                            upcomingDestinations.map((dest, index) => (
                                <TouchableOpacity onPress={() => router.push(`/place/${dest.id}`)} key={index} className="rounded-lg p-2 mr-2 w-25 flex-row mb-5">
                                    <Image
                                        source={{ uri: dest.image }}
                                        className="w-28 h-40 self-center rounded-lg ml-2"
                                    />
                                    <View className="mt-2 flex-row justify-between items-center flex-1 ml-5">
                                        <View>
                                            <StyledText weight="bold" className="text-md pl-3">{dest.name}</StyledText>
                                            <StyledText className="text-sm text-gray-600 pl-2">{dest.date}</StyledText>
                                             <StyledText className="text-sm text-gray-600 pl-2">{dest.price.time}</StyledText>
                                        </View>

                                        <FontAwesome name="heart" size={24} color="black" className='mr-5' />
                                    </View>
                                </TouchableOpacity>
                            ))
                        }

                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
export default Favourites;
