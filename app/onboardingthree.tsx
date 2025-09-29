import {View, Text,Image, Pressable} from "react-native"
import { useRouter } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {StyledText} from "@/components/StyledText";

const onboardingThree = () =>{
    const router = useRouter();
    const handleSkip = () =>{
        router.push("/login")
    }
    return(
        <View className="flex-1 bg-red-300] px-8 pt-24">
            <View>
                <StyledText className="font-semibold text-right text-md" onPress={handleSkip}>SKIP</StyledText>
            </View>
            <View className="mt-10 pt-10">
                <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
                className="w-full h-[400px] object-cover "
                />
                <StyledText className="text-4xl font-bold py-3">Embark on global adventures</StyledText>
                <StyledText className="text-lg text-gray-400">Make your list—we'll take you there, one dream at a time.</StyledText>
            </View>
            <View className="flex flex-row gap-x-2 justify-center py-8">
                 <View className="bg-white py-1 h-2 w-5 rounded-md"></View>
                  <View className="bg-white py-1 h-2 w-5 rounded-md"></View>
                  <View className="bg-black py-1 h-2 w-5 rounded-md"></View>
            </View>
            <Pressable onPress={() => router.push("/login")}>
                <StyledText className="text-right rounded-full ">
                    <FontAwesome5 name="plane" size={24} color="black" />
                </StyledText>
            </Pressable>

        </View>
    )
}
export default onboardingThree;