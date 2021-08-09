import React from 'react';
import {TextInput} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import ViewHomeScreen from "./ViewBlock/ViewHomeScreen";
import ViewSelectMenu from "./ViewBlock/ViewSelectMenu";

const Stack = createStackNavigator();

function HomeScreen() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="ViewSelectMenu" component={ViewSelectMenu} options={
                {title:'Главная',
                }}/>
            <Stack.Screen name="ViewHomeScreen" component={ViewHomeScreen}  options={
                {
                    title: 'Поиск',
                    headerBackTitle:true,
                    headerTitle: props => <TextInput style={{
                        backgroundColor:'#e3e3e3',
                        width:300,
                        padding:10,
                        borderRadius:5,
                    }} placeholder='Поиск'/>
                }}/>
        </Stack.Navigator>
    );
}

export default HomeScreen;