import React, { Component } from 'react'
import { Pressable, Text, View } from 'react-native'
import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Image } from 'react-native'; // Add this import
function Header() {

    

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#green',
            height: 56,
            width: '100%',
        },
        leftContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        },
        logo: { 
            width: 100,
            height: 100,
        },
    });

    return (
        <View style={styles.container}>
            <View>
            <Image
          source={require('../hinh/hinh.png')} style={styles.logo}resizeMode="contain"/>
            </View>
            <View style={styles.leftContainer}>
                <Pressable><AntDesign name="search" size={24} color="black" /></Pressable>
                <Pressable><Entypo name="shopping-cart" size={24} color="black" /></Pressable>
            </View>
        </View>
    )
}

export default Header;
