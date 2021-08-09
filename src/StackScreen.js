import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {useDispatch, useSelector} from "react-redux";
import BottomTabScreen from "./BottomTabScreen";
import ViewSalon from './screens/StackNavigator/ViewSalon'
import ViewMaster from './screens/StackNavigator/ViewMaster'
import testScreen from './testScreen'
import {checkTokens} from "./redux/authAction";

const Stack = createStackNavigator();


function StackNavScreen() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(checkTokens())
    },[dispatch])

    // const auth = useSelector(state=>state.auth);
    // console.log(auth)
    return (
        <Stack.Navigator >
            <Stack.Screen name="testScreen" component={testScreen} />
            {/*<Stack.Screen name="BottomTabScreen" component={BottomTabScreen} options={{*/}
            {/*    headerShown:false,*/}
            {/*    headerStyle:{backgroundColor:'red'}*/}
            {/*}}/>*/}
            {/*<Stack.Screen name="ViewSalon" component={ViewSalon} />*/}
            {/*<Stack.Screen name="ViewMaster" component={ViewMaster} />*/}
        </Stack.Navigator>
    );
}

export default StackNavScreen;