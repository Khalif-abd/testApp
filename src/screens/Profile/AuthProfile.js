import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { Exit } from "../../redux/authAction";

function AuthProfile({ navigation }) {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Профиль пользователя!</Text>
      <Button title='Выход' onPress={()=>dispatch(Exit())} />
    </View>
  );
}
export default AuthProfile;
