import { View, Text, Platform, TextInput, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native';
import { StyledText } from "@/components/StyledText";
import { Stack, useRouter } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { popularDestinations, upcomingDestinations, recentDestinations } from '../../data/data';


const Home = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <View>
        <Stack.Screen options={{ headerShown: false }} />

        <View className="flex-row justify-between items-center mt-20 px-10">
          <FontAwesome name="user-circle-o" size={24} color="black" />
          <FontAwesome5 name="bell" size={24} color="black" />
        </View>
        <View className="px-10 mt-5">
          <StyledText weight="bold" className="text-3xl mt-10">
            Discover {"\n"} a new world
          </StyledText>

          <View className="w-80 mt-4 relative">
            <TextInput
              className="border border-gray-300 rounded-lg p-4 pr-10"
              placeholder="Search for destinations..."
            />
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

          <StyledText weight="bold" className="text-xl mt-8">
            Popular
          </StyledText>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
            {
              popularDestinations.map((dest, index) => (
                <View key={index} className='flex-row items-center mr-4 bg-white p-4 rounded-lg'>
                  <Image
                    source={{ uri: dest.image }}
                    className="w-10 h-10 rounded-lg mr-4"
                  />
                  <StyledText className="text-lg font-semibold mt-2">{dest.name}</StyledText>
                </View>
              ))
            }

          </ScrollView>

          <View>
            <View className="mt-5 ">
              <StyledText weight="bold" className="text-xl mt-5">
                Upcoming
              </StyledText>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-5">
              {
                upcomingDestinations.map((dest, index) => (
                  <TouchableOpacity onPress={() => router.push(`/place/${dest.id}`)} key={index} className="bg-gray-200 rounded-lg p-2 mr-2 w-25">
                    <Image
                      source={{ uri: dest.image }}
                      className="w-28 h-40 self-center rounded-lg"
                    />
                    <View className="flex-row justify-between items-start mt-2">
                      <View>
                        <StyledText weight="bold" className="text-md pl-3">{dest.name}</StyledText>
                        <StyledText className="text-sm text-gray-600 pl-2">{dest.date}</StyledText>
                      </View>
                      <Entypo name="chevron-small-right" size={20} color="black" />
                    </View>
                  </TouchableOpacity>
                ))
              }

            </ScrollView>
          </View>
          <View>
            <StyledText weight="bold" className="text-xl mt-5 ">
              Recent
            </StyledText>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-5">
              {
                recentDestinations.map((dest, index) => (
                  <View key={index} className="bg-gray-200 rounded-lg p-2 mr-2 w-25">
                    <Image
                      source={{ uri: dest.image }}
                      className="w-28 h-40 self-center rounded-lg"
                    />
                    <View className="flex-row justify-between items-start mt-2">
                      <View>
                        <StyledText weight="bold" className="text-md pl-3">{dest.name}</StyledText>
                        <StyledText className="text-sm text-gray-600 pl-2">{dest.date}</StyledText>
                      </View>
                      <Entypo name="chevron-small-right" size={20} color="black" />
                    </View>
                  </View>
                ))
              }
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>

  );
};

export default Home;
