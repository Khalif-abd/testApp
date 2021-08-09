import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsMenu from "./TopNav/TopNavigate";

const Stack = createStackNavigator();
function FavoriteScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={TabsMenu}
        options={{ title: "Избранное" }}
      />
    </Stack.Navigator>
  );
}

export default FavoriteScreen;
