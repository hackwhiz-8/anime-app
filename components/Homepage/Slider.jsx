import { View, Text, Pressable, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'

export default function Slider() {

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            setloading(true)
            const url = 'https://kitsu.io/api/edge/trending/anime';
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setdata(result.data);
            console.warn(data);
            setloading(false)
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }

    return (
        <View
            style={{
                marginTop: 50,

            }} >
            <Text style={{
                margin: 10,
                fontSize: 30
            }}>
                Trending
            </Text>
            <FlatList
                data={data}
                horizontal={true}
                refreshing={loading}
                onRefresh={fetchData}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => router.push({
                        pathname: '/cards',
                        params: { id: item.id }
                    })} >
                        <View key={index} style={{ borderWidth: 1, borderRadius: 15, margin: 10, backgroundColor: 'black' }} >

                            <Image source={{ uri: item.attributes?.coverImage?.small }}
                                style={styles?.SliderImage}
                            />
                            {/* <Text style={{ fontSize: 16, color: 'white', textAlign: 'center', padding: 10, fontSize: 20, }}>{item.attributes?.slug}</Text> */}
                        </View>
                    </TouchableOpacity>
                )

                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    SliderImage: {
        width: 400,
        height: 100,
        // borderRadius: 15,
        marginRight: 15,
        margin: 20,
        objectFit: 'contain'
    }
})