import { View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StyledText } from "@/components/StyledText";
import { Stack } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from 'react';



const Tabtwo = () => {
  const [viewAll, setViewAll] = useState(false);

  type TabKey = 'shop' | 'stay' | 'do';
  const [activeTab, setActiveTab] = useState<TabKey>("shop");

  const images: Record<TabKey, string> = {
    shop: "https://images.unsplash.com/photo-1719659018185-8a239c35fb4a?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stay: "https://images.unsplash.com/photo-1719601398911-4181da5f1d7b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    do: "https://images.unsplash.com/photo-1627240330670-2a18ff1f6b82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };

  const destinations = [
    {
      name: "Hawaii",
      image: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "France",
      image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Newyork",
      image: "https://images.unsplash.com/photo-1553608622-8c715b1b5145?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Canada",
      image: "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  // Get destinations to display (first 2 or all)
  const displayedDestinations = viewAll ? destinations : destinations.slice(0, 2);



  return (
    <ScrollView>
      <View className='mt-10 ml-4'>
        <Stack.Screen options={{ headerShown: false }} />
        <View className='mt-10 ml-5'>
          <StyledText weight="bold" className="text-3xl mb-1 mt-5">Explore your dream locations</StyledText>
          <StyledText className="text-gray-500 mb-4">Discover new places to visit and explore.</StyledText>
        </View>
        <View className="px-4 ">
          <View className="w-80 relative">
            <TextInput
              className="border border-gray-300 rounded-lg p-4 pr-10"
              placeholder="Find your next adventure..."
            />
            <FontAwesome5
              name="search-location"
              size={20}
              color="black"
              style={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: [{ translateY: -12 }],
              }}
            />
          </View>
        </View>
        <View>
          <View className='px-4 mt-6 flex-row justify-between'>
            <View className='px-2 ' >
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
                className='w-10 h-10'
              />
              <StyledText className='text-lg font-semibold mt-2 text-sm '>Honeymoon</StyledText>
            </View>
            <View className='px-2 ' >
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
                className='w-10 h-10'
              />
              <StyledText className='text-lg font-semibold mt-2 text-sm '>Family Holiday</StyledText>
            </View>
            <View className='px-2 ' >
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
                className='w-10 h-10'
              />
              <StyledText className='text-lg font-semibold mt-2 text-sm '>Solo-Adventure</StyledText>
            </View>
            <View className='px-5 ' >
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
                className='w-10 h-10'
              />
              <StyledText className='text-lg font-semibold mt-2 text-sm'>Business trip</StyledText>
            </View>
          </View>
          <View>
            <View className="flex-row items-center justify-between px-4 mt-6">
              <StyledText weight='semibold' className='text-2xl font-semibold'>Hot Destinations</StyledText>
              {!viewAll && destinations.length > 2 && (
                <TouchableOpacity onPress={() => setViewAll(true)}>
                  <StyledText className="text-blue-900 font-medium">View All</StyledText>
                </TouchableOpacity>
              )}
            </View>

            <ScrollView
              horizontal={!viewAll}
              showsHorizontalScrollIndicator={false}
              className="mt-5"
              contentContainerStyle={viewAll ? { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16 } : {}}
            >
              {displayedDestinations.map((destination, index) => (
                <View key={index} className="rounded-lg p-2 mr-2 w-25 relative">
                  <Image
                    source={{ uri: destination.image }}
                    className="w-40 h-64 self-center rounded-lg object-cover mx-auto"
                  />
                  <View className="flex-row items-center justify-between mt-2 absolute top-2 left-2 right-2">
                    <StyledText weight="bold" className="text-lg pl-3">{destination.name}</StyledText>
                    <FontAwesome5 name="heart" size={15} color="black" className="mr-3" />
                  </View>
                </View>
              ))}
            </ScrollView>

            {viewAll && (
              <TouchableOpacity
                onPress={() => setViewAll(false)}
                className="mx-4 mt-4 py-2 px-4 bg-gray-200 rounded-lg"
              >
                <StyledText className="text-center font-medium text-blue-900">Show Less</StyledText>
              </TouchableOpacity>
            )}
          </View>
          <View className='px-4 mt-6'>
            <StyledText weight='semibold' className="leading-none text-xl">Explore Egypt</StyledText>

            <View className='flex-row justify-between px-4 mt-2'>
              <TouchableOpacity onPress={() => setActiveTab('shop')}>
                <StyledText
                  className={activeTab === 'shop' ? 'font-bold text-blue-900' : 'text-gray-600'}
                >
                  Where to shop
                </StyledText>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setActiveTab('stay')}>
                <StyledText
                  className={activeTab === 'stay' ? 'font-bold text-blue-900' : 'text-gray-600'}
                >
                  Where to Stay
                </StyledText>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setActiveTab('do')}>
                <StyledText
                  className={activeTab === 'do' ? 'font-bold text-blue-900' : 'text-gray-600'}
                >
                  What to do
                </StyledText>
              </TouchableOpacity>
            </View>

            <View>
              <Image
                source={{ uri: images[activeTab] || images.shop }}
                style={{ width: '100%', height: 256, marginTop: 16, borderRadius: 8 }}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default Tabtwo;