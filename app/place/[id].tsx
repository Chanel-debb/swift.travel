import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { upcomingDestinations } from '@/data/data';

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
            <Text>Place with ID of {id}</Text>
            <Text>{place?.name}</Text>
        </ScrollView>
    )
}

export default PlaceDetails;