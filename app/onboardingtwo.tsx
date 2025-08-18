import {View, Text,Image, Pressable} from "react-native"
import { useRouter } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StyledText } from "@/components/StyledText";


const onboardingTwo = () =>{
    const router = useRouter();
    const handleSkip = () =>{
        router.push("/login")
    }
    return(
        <View className="flex-1 bg-[#8adde1] px-8 pt-24">
            <View>
                <StyledText className="font-semibold text-right text-md" onPress={handleSkip}>SKIP</StyledText>
            </View>
            <View>
                <Image 
                source={require("../assets/images/location.png")}
                className="w-full h-[450px] object-cover"
                />
                <StyledText className="text-4xl font-bold py-3">Hop over to any spot on the map</StyledText>
                <StyledText className="text-lg text-gray-400">Explore every corner of Earth—no borders, just possibilities.</StyledText>
            </View>
            <View className="flex flex-row gap-x-2 justify-center py-8">
                 <View className="bg-white py-1 h-2 w-5 rounded-md"></View>
                 <View className="bg-black py-1 h-2 w-5 rounded-md"></View>
                  <View className="bg-white py-1 h-2 w-5 rounded-md"></View>
            </View>
            <Pressable onPress={() => router.push("/onboardingthree")}>
                <StyledText className="text-right rounded-full ">
                    <FontAwesome5 name="plane" size={24} color="black" />
                </StyledText>
            </Pressable>

        </View>
    )
}
export default onboardingTwo;