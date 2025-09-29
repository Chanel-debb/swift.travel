import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#673ab7",
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'explore',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'favourites',
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'notifications',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'setting',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />
        }}
      />
      
     
    </Tabs>

    
  );
}
