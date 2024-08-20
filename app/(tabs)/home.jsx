import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Slider from '../../components/Homepage/Slider'
import Category from '../../components/Homepage/Category'
import Upcoming from '../../components/Homepage/Upcoming'
import ItemByCategory from '../../components/Homepage/ItemByCategory'
import Header from '../../components/Homepage/Header'


export default function Home() {
    return (
        <ScrollView>
            <View>
                {/* <Text>Home</Text> */}
                {/* <Header/> */}
                {/* carousel */}
                {/* trendingAnime */}
                <Slider />
                {/* anime by category */}
                <Upcoming />

                <ItemByCategory />


            </View>
        </ScrollView>
    )
}