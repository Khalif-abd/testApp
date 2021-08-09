import React from 'react';
import {View, ScrollView, Text, Button} from "react-native";
import BlockStyle from "./Style";

function ViewMyNotes({navigation}) {
    return (
        <View  style={{height:'99%'}}>
            <ScrollView>
                <View style={BlockStyle.view} >
                        <Text style={BlockStyle.text}>
                        Услуга: Стрижка бороды{'\n'}
                        Время: 10:35{'\n'}
                        Времы выполнения: ~30-40 минут.{'\n'}
                        Стоимость: ~450 руб.{'\n'}
                        Мастер: 1адлан{'\n'}
                        Салон: Renessans{'\n'}
                        Адрес салона: Пр. Путина 3{'\n'}
                        </Text>
                    </View>
                {/*<Button title='Отменить запись' onPress={console.log(1)} />*/}
            </ScrollView>
        </View>
    );

}
export default ViewMyNotes;