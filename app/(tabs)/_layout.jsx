import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';



export default function TabLayout() {
    return (
        <Tabs 
            screenOptions={{
                tabBarActiveTintColor: 'green',
                
            }}
        >
            <Tabs.Screen name='home'
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen name='search'
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />
                }}
            />
            <Tabs.Screen name='favorite'
                options={{
                    title: "Favorite",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="heart" size={24} color={color} />
                }}
            />

        </Tabs>
    )
}