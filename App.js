import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import StackNavScreen from "./src/StackScreen";

// const unsubscribe = NetInfo.addEventListener(state => {
//     console.log("Connection type", state.type);
//     console.log("Is connected?", state.isConnected);
// });

function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider >
                <NavigationContainer>
                            <StackNavScreen/>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
}

export default App;
