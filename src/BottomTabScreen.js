import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./screens/Home/HomeScreen";
import FavoriteScreen from "./screens/Favorite/FavoriteScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import MyNotesScreen from "./screens/MyNotes/MyNotesScreen";
import { Icon } from "react-native-elements";
// import {Icon } from 'native-base';
const Tab = createMaterialBottomTabNavigator();

function BottomTabScreen() {
  const iconColor = "#383838";
  const textColor = "#2a55c1";

  return (
    <Tab.Navigator
      activeColor={textColor}
      barStyle={{ backgroundColor: "#fdfdfd" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Главная",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={25} color={iconColor} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}

        options={{
          title: "Избранное",
          tabBarIcon: ({ color }) => (
            <Icon name="favorite" size={25} color={iconColor} />
          ),
        }}
      />
      <Tab.Screen
        name="MyNotes"
        component={MyNotesScreen}
        options={{
          title: "Мои записи",
          tabBarIcon: ({ color }) => (
            <Icon name="library-books" size={25} color={iconColor} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профиль",
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={25} color={iconColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabScreen;
