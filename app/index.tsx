import {View,Image, Pressable} from "react-native"
import { useRouter } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {StyledText} from "@/components/StyledText";

const App = () =>{
    const router = useRouter();
    const handleSkip = () =>{
        router.push('/login')
    }
    return(
        <View className="flex-1 bg-green-200 px-8 pt-24">
            <View>
                <StyledText className="font-semibold text-right text-md" onPress={handleSkip}>SKIP</StyledText>
            </View>
            <View>
                <Image 
                source={require("../assets/images/location-globe.png")}
                className="w-full h-[450px] object-cover"
                />
                <StyledText weight="bold" className="text-4xl py-3 mb-2">Access Destinations Worldwide</StyledText>
                <StyledText className="text-lg Text-gray-500">Travel to any Location on the Globe. Wherever you dream, you can go.</StyledText>
            </View>
            <View className="flex flex-row gap-x-2 justify-center py-8 mt-5">
                <View className="bg-black py-1 h-2 w-5 rounded-md"></View>
                 <View className="bg-white py-1 h-2 w-5 rounded-md"></View>
                  <View className="bg-white py-1 h-2 w-5 rounded-md"></View>
            </View>
            <Pressable onPress={() => router.push("/onboardingtwo")}>
                <StyledText className="text-right rounded-full ">
                    <FontAwesome5 name="plane" size={24} color="black" />
                </StyledText>
            </Pressable>

        </View>
    )
}
export default App;