import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewMyNotes from "./ViewMyNotes";

const Stack = createStackNavigator();

function MyNotesScreen() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="ViewMyNotes" component={ViewMyNotes} options={{title:'Мои записи'}}/>
        </Stack.Navigator>
    );
}

export default MyNotesScreen;