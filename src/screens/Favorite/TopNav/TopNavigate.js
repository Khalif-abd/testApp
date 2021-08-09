import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FavoriteSalon from "./FavoriteSalon";
import FavoriteMaster from "./FavoriteMaster";
const TopNav = createMaterialTopTabNavigator();

function TabsMenu() {
    return (
        <TopNav.Navigator>
            <TopNav.Screen name="FavoriteSalon" component={FavoriteSalon} options={{title:'Салоны'}}/>
            <TopNav.Screen name="FavoriteMaster" component={FavoriteMaster} options={{title:'Мастера'}}/>
        </TopNav.Navigator>
    );
}

export default TabsMenu;