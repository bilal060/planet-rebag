/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import images from '../../assets/images/images';
import Home from '../../screen/StoreScreen/Home/screen/Home';
import routes from '../routes';

const HomeTab = createBottomTabNavigator();

export default function StoreBottomStack({navigation}) {
  return (
    <HomeTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        //tabBarShowLabel: false,
        tabBarStyle: {
          height: '8.5%',
          position: 'absolute',
        },
        // tabBarLabelStyle: {
        //   fontSize: 12,
        //   color: '#1E252B',
        //   bottom: '7%',
        // },
        tabBarActiveTintColor: '#79AA00',
        tabBarInactiveTintColor: '#040400',
      }}>
      <HomeTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 13,
            bottom: '11%',
            fontWeight: '600',
          },
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              source={images.homeIcon}
              style={{
                tintColor: focused ? '#79AA00' : '#1E252B',
              }}
            />
          ),
          headerShown: false,
        }}
      />
      <HomeTab.Screen
        name="Scan Item"
        component={routes.AddSubStore}
        options={{
          tabBarLabel: 'Sub Store',
          tabBarLabelStyle: {
            fontSize: 13,
            bottom: '11%',
            fontWeight: '600',
          },
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              source={images.subStore}
              style={{
                tintColor: focused ? '#79AA00' : '#1E252B',
              }}
            />
          ),

          headerShown: false,
        }}
      />
      <HomeTab.Screen
        name="RegisterBag"
        component={routes.History}
        options={{
          tabBarLabel: 'Transactions',
          tabBarLabelStyle: {
            fontSize: 13,
            bottom: '11%',
            fontWeight: '600',
          },
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              source={images.transcation}
              style={{
                tintColor: focused ? '#79AA00' : '#1E252B',
              }}
            />
          ),
          headerShown: false,
        }}
      />
      {/* <HomeTab.Screen
        name="Setting"
        component={routes.Settings}
        options={{
          tabBarLabel: 'Setting',
          tabBarLabelStyle: {
            fontSize: 13,
            bottom: '11%',
            fontWeight: '600',
          },
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              source={images.settingIcon}
              style={{
                tintColor: focused ? '#79AA00' : '#1E252B',
              }}
            />
          ),
          headerShown: false,
        }}
      /> */}
    </HomeTab.Navigator>
  );
}
