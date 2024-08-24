import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'expo-router';

export default function Upcoming() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    fetchData();
  }, [])

  const { router } = useRouter();

  const fetchData = async () => {
    try {
      setloading(true);
      const url = 'https://api.jikan.moe/v4/top/anime?filter=upcoming&page=1';
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


      }} >
      <Text style={{
        margin: 10,
        marginLeft: 12,
        fontSize: 20
      }}>
        Upcoming
      </Text>
      <FlatList
        data={data}
        horizontal={true}
        refreshing={loading}
        onRefresh={fetchData}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Pressable  key={index} style={{ borderWidth: 1, borderRadius: 15, margin: 5, backgroundColor: 'black', width: 130 }} >

            <Image source={{ uri: item.images?.jpg?.large_image_url }}
              style={styles?.SliderImage}
            />
            <Text style={{ textAlign: 'center', color: 'white', textAlign: 'center', padding: 10, fontSize: 10, }}>{item?.titles[0].title}</Text>
          </Pressable>
        )

        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  SliderImage: {
    width: 120,
    height: 150,
    padding: 10,
    borderRadius: 15,
    marginRight: 1,
    margin: 1,
    objectFit: 'contain'
  }
})