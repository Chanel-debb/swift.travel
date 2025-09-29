import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, Pressable} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { upcomingDestinations } from '@/data/data';
import { StyledText } from '@/components/StyledText';
// import Image7 from "../../assets/images/world.png"

const PlaceDetails = () => {
    const { id } = useLocalSearchParams(); // destructuring
    let place = upcomingDestinations.find(dest => dest.id === id);

    // const person = {
    //     name: "Deborah",
    //     age: 30,
    //     city: "Egbeda"
    // }

    // let name = person.name;
    // let age = person.age;
    // let city = person.city;

    // const { name, age, city } = person; // destructuring

    // const url = {
    //     base: "https://example.com",
    //     query: "search",
    //     id: 2
    // }

    return (
        <ScrollView className='pt-10 px-4'>
            <View>
                <StyledText weight='bold' className='text-2xl mt-8'>VISIT</StyledText>
                <Image
                // source={Image7}
                className='w-10 h-10'
                />
            </View>
            <View className='mt-5'>
                <StyledText weight='semibold' className='text-4xl text-center mt-5'>{place?.name}</StyledText>
            <Image 
                source={{ uri: place?.image }}
                alt="Place image"
                className='w-full h-[300px] rounded-xl mt-7'
             />
             <View className='mt-5 px-4'>
                <StyledText weight='bold' className='text-lg'>{place?.location}</StyledText>
                <StyledText weight='light' className='text-lg'>{place?.price.budget}</StyledText>
                <StyledText weight='light' className='text-lg'>{place?.price.midRange}</StyledText>
                <StyledText weight='light' className='text-lg'>{place?.price.luxury}</StyledText>
                <StyledText>{place?.price.currency}</StyledText>
             </View>
            <Pressable
            className='bg-black py-3 rounded-3xl text-white mt-3'
            >
                <StyledText className='text-white text-center'>Book</StyledText>
            </Pressable>
              
            
            </View>

        </ScrollView>
    )
}

export default PlaceDetails;