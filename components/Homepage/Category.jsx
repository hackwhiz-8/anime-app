import { View, Text, FlatList, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'

export default function Category({categorySelect}) {

    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetchData();
    // }, [])

    const categories = [
        {
            'name': 'popular'
        },
        {
            'name': 'airing'
        },
        {
            'name': 'Top'
        },
        {
            'name': 'Most watched'
        },
    ]

    return (
        <View
            style={{
               marginLeft:10

            }} >
            <Text style={{
                margin: 10,
                fontSize: 20
            }}>
                categories
            </Text>
            <FlatList
                data={categories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index}
                    onPress={()=>
                        categorySelect(item.name)
                    }
                     style={{ borderWidth: 1, borderRadius: 15,margin:2, backgroundColor: 'black' }} >
                        <Text style={{  color: 'white', textAlign: 'center', padding: 10, fontSize: 17, }}>{item.name}</Text>
                    </TouchableOpacity>
                )

                }
            />
        </View>
    )
}