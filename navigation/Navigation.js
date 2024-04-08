import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Layout/HomeScreen';
import CartScreen from '../Layout/CartScreen';
import FavoritesScreen from '../Layout/FavoritesScreen';
import LienHe from '../Layout/lienHe';




const Tab = createBottomTabNavigator();

const Navigation = () => {

  return (

    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#D17842',
      tabBarInactiveBackgroundColor: 'black',
      tabBarActiveBackgroundColor: 'black',
    }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Image source={require('../image/Vectorhome.png')} tintColor={color} />
        }}
        name=" "
        component={HomeScreen} />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Image source={require('../image/Vectorbag1.png')} tintColor={color} />
        }}
        name="  "
        component={CartScreen} />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Image source={require('../image/Vectorhear.png')} tintColor={color} />
        }}
        name="    "
        component={FavoritesScreen} />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Image source={require('../image/Vectornotice.png')} tintColor={color} />
        }}
        name="     "
        component={LienHe} />
    </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})