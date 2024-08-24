import { View, Text, FlatList, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Category from './Category'
import { Link } from 'expo-router'
import { router } from 'expo-router';

export default function ItemByCategory() {
    // const [category, setcategory] = useState('')

    const [data, setdata] = useState([])
    const [category, setcategory] = useState('/top/anime?filter=bypopularity')

    // console.log(category)
    const fetchData = async (value) => {


        try {
            if (value === 'airing') {
                setcategory('/top/anime?filter=airing');
            }
            if (value === 'popular') {
                setcategory('/top/anime?filter=bypopularity')
            }

            const url = `https://api.jikan.moe/v4`;
            const mainUrl = `${url}${category}`
            console.log(mainUrl)
            const response = await fetch(mainUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setdata(result.data);
            // console.warn(data);
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }


    return (
        <View>
            <Category categorySelect={(value) => fetchData(value)} />

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 20,
                flexWrap: 'wrap'
            }}>
                {
                    data.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => router.push({
                                pathname: '/cards',
                                params: {id:item.mal_id}
                            })}>
                                <View key={index} style={{ borderWidth: 1, borderRadius: 15, margin: 5, backgroundColor: 'black', width: 170 }} >

                                    <Image source={{ uri: item.images?.jpg?.large_image_url }}
                                        style={styles?.SliderImage}
                                    />
                                    <Text style={{ textAlign: 'center', color: 'white', textAlign: 'center', padding: 10, fontSize: 10, }}>{item?.titles[0].title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    SliderImage: {
        width: 160,
        height: 200,
        paddingTop: 10,
        objectFit: 'contain'
    }
})