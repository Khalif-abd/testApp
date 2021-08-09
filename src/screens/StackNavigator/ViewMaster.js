import React from 'react';
import {View,Text,Button} from "react-native";

function MasterViewFavoriteContent({route, navigation }) {
    const { name,surname, img, rating } = route.params;
    navigation.setOptions({title:name})

    return (
        <View>
            <Text>
                Мастер: {name} {surname}{'\n'}
                Рейтинг: {rating}{'\n'}
            </Text>
            <Button title='goBack' onPress={()=>{navigation.goBack();}} />
        </View>
    );
}
export default MasterViewFavoriteContent;