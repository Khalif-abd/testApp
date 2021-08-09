import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

function ViewSelectMenu({ navigation }) {
  return (
    <View style={{ height: "99%" }}>
      <Button
        title="Салоны"
        onPress={() =>
          navigation.navigate("ViewHomeScreen", {
            type: 3,
          })
        }
        style={{
            width:100
        }}
      />
      <Button
          type="outline"
        title="Барберы"
        onPress={() =>
          navigation.navigate("ViewHomeScreen", {
            type: 1,
          })
        }
        style={{
            width:100
        }}
      />
      <Button
        title="Парикмахерские"
        onPress={() =>
          navigation.navigate("ViewHomeScreen", {
            type: 2,
          })
        }
        style={{
            width:100
        }}
      />

    </View>
  );
}
export default ViewSelectMenu;
