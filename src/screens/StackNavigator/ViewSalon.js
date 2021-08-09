import React from 'react';
import {View,Text,Button} from "react-native";

function ViewSalon({route, navigation }) {
    const { name, address } = route.params;
    navigation.setOptions({title: name})
    return (
        <View>
            <Text>name: { name } </Text>
            <Text>street: { address } </Text>
            <Button title='goBack' onPress={()=>{navigation.goBack();}} />
        </View>
    );
}
export default ViewSalon;