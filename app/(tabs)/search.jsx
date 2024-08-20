import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Search() {
  const [text, settext] = useState('');
  const [data, setdata] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
       fetchData();
  }, [text])
  const fetchData = async () => {

    if (text.length === 0) {
      setdata([])
      return;
    }
    try {
      setLoaded(true);
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${text}&order_by=popularity&sort=asc&sfw`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setdata(result.data);
      setLoaded(false)
      console.warn(data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }


  return (
    <View
      style={{
        marginTop: 40

      }} >
      <Text style={{
        margin: 10,
        fontSize: 30
      }}>
        Search
      </Text>

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TextInput
          style={styles.input}
          onChangeText={settext}
          value={text}
          placeholder='search "naruto-shipuden" '

        />
        <TouchableOpacity onPress={fetchData}>
          <Ionicons name="search" size={30} color='black' />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 20,
          flexWrap: 'wrap',
          marginBottom: 120
        }}>
          {

            data.map((item, index) => {
              return (
                <View key={index} style={{ borderWidth: 1, borderRadius: 15, margin: 5, backgroundColor: 'black', width: 170 }} >

                  <Image source={{ uri: item.images?.jpg?.large_image_url }}
                    style={styles?.SliderImage}
                  />
                  <Text style={{ textAlign: 'center', color: 'white', textAlign: 'center', padding: 10, fontSize: 10, }}>{item?.titles[0].title}</Text>
                </View>
              )
            })

          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  SliderImage: {
    width: 160,
    height: 200,
    paddingTop: 10,
    objectFit: 'contain',
    borderRadius: 15
  }
});