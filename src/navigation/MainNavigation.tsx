import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from "react-native-responsive-fontsize";

import CatIcon from 'assets/images/CatIcon';
import colors from '../utils/colors';
import FavouriteScreen from 'screens/FavouriteScreen';
import HeartIcon from 'assets/images/HeartIcon';
import HomeScreen from 'screens/HomeScreen';


const { height } = Dimensions.get("screen")

type TabStackParamList = {
  Home: undefined;
  Favourite: undefined;
};

export const Tab = createBottomTabNavigator<TabStackParamList>();

export const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: colors.black,
      tabBarInactiveTintColor: colors.black,
      tabBarLabelStyle: {
        marginTop: 9,
        color: colors.black,
        fontSize: RFValue(13, 815),
      },
      tabBarStyle: {
        position: "absolute",
        bottom: 0,
        height: height * 0.14,
        paddingBottom: 30
      },
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color, focused }) => {
          return <CatIcon fill={focused ? color : colors.grey} width={25} height={25} />
        },
        tabBarLabel: ({ focused, color }) => (
          <Text
            style={{
              lineHeight: RFValue(19, 815),
              color: focused ? color : colors.grey,
              fontWeight: '400',
            }}>
            All Cats
          </Text>
        ),
      }} />
      <Tab.Screen name="Favourite" component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <HeartIcon fill={focused ? color : colors.grey} width={25} height={25} />
          },
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                lineHeight: RFValue(19, 815),
                color: focused ? color : colors.grey,
                fontWeight: '400',
              }}>
              Cats I Like
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
