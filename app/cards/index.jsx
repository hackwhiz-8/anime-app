import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Card() {

    const item = useLocalSearchParams()
    const [data, setdata] = useState([])

    useEffect(() => {
        console.log(item.id)
        fetchData()
        console.log(data)
    }, [])

    const fetchData = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${item.id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setdata(result.data);

    }


    return (
        <View>

            {/* <TouchableOpacity >
                <View key={index} style={{ borderWidth: 1, borderRadius: 15, margin: 5, backgroundColor: 'black', width: 170 }} >

                    <Image source={{ uri: data.images?.jpg?.large_image_url }}
                        style={styles?.SliderImage}
                    />
                    <Text style={{ textAlign: 'center', color: 'white', textAlign: 'center', padding: 10, fontSize: 10, }}>{data?.titles[0].title}</Text>
                </View>
            </TouchableOpacity> */}


        </View>
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