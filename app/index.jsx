import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }}>

            <Link href={'/(tabs)/home'}
                style={{
                    backgroundColor: 'black',
                    padding: 15,
                }}>
                <Text style={{ color: 'white', fontSize: 15 }}>Get Started</Text>

            </Link>
        </View>
    )
}