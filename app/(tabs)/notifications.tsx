import { StyledText } from "@/components/StyledText";
import { View, ScrollView, Image, Switch } from 'react-native';
import { Stack } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { notifications } from '../../data/notification'
import { useState } from "react";


const Notifications = () => {

    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    return (
        <View className="mt-10 ml-4 ">
            <Stack.Screen options={{ headerShown: false }} />
            <View className="mt-10 px-5 mb-5">
                <View className="items-center flex-row justify-between ">
                    <Ionicons name="chevron-back" size={24} color="black" className=' p-2' />
                    <StyledText className="text-3xl font-bold  ">
                        Notifications
                    </StyledText>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" className=' p-2' />
                </View>
                <View className="flex-row items-center justify-between mt-3 mb-2 px-2">
                    <StyledText weight="semibold" className="text-lg">Enable Notifications</StyledText>
                    <Switch
                        value={notificationsEnabled}
                        onValueChange={setNotificationsEnabled}
                    />
                </View>
                <ScrollView>
                    <View>
                        {
                            notifications.map((note, index) => (
                                <View key={index} className="mb-6 mt-3">
                                    <StyledText weight="semibold" className="text-gray-700  mb-2 ml-1 text-xl">
                                        {note.dateTag}
                                    </StyledText>
                                    <View className="bg-white rounded-2xl shadow-md p-4">
                                        <View className="flex-row items-center mb-3">
                                            <Image
                                                source={{ uri: note.image }}
                                                className="w-12 h-12 rounded-2xl mr-3"
                                            />
                                            <View>
                                                <StyledText weight="semibold" className="text-base text-gray-800">
                                                    {note.title}
                                                </StyledText>
                                                <StyledText className="text-sm text-gray-500">
                                                    {note.time}
                                                </StyledText>
                                            </View>
                                        </View>
                                        <StyledText className="text-gray-600 text-sm leading-5">
                                            {note.body}
                                        </StyledText>
                                    </View>
                                </View>


                            ))
                        };

                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
export default Notifications;