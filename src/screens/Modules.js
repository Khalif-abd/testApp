import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import BlockStyle from "./HomeStyle";
import { ToggleButton } from "react-native-paper";

const createTwoButtonAlert = () =>
  Alert.alert(
    "Авторизация",
    "Нужна авторизация!",
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );

export function ShowSalon(props) {
  const [like, setLike] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        props.nav.navigate("ViewSalon", {
          name: props.name,
          address: props.address,
          rating: props.rating,
          img: props.img,
        });
      }}
    >
      <View style={BlockStyle.view}>
        <Image style={BlockStyle.tinyLogo} source={{ uri: props.img }} />
        <Text style={BlockStyle.text}>
          {props.name}
          {"\n"}
          {props.address}
          {"\n"}
          Рейтинг: {props.rating}
          {"\n"}
        </Text>

        <ToggleButton.Group
          value={like}
          onValueChange={
            () => setLike(!like)
            // createTwoButtonAlert
          }
        >
          <ToggleButton
            value="watermelon"
            size={24}
            opacity={0.5}
            style={{
              position: "absolute",
              left: 60,
              backgroundColor: "rgba(7,7,7,0.1)",
              borderRadius: 10,
            }}
            color="white"
            icon={like ? "heart" : "heart-outline"}
          />
        </ToggleButton.Group>
      </View>
    </TouchableOpacity>
  );
}

export function ShowMaster(props) {
  const [like, setLike] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        props.nav.navigate("ViewMaster", {
          name: props.name,
          surname: props.surname,
          rating: props.rating,
          img: props.img,
        });
      }}
    >
      <View style={BlockStyle.view}>
        <Image style={BlockStyle.tinyLogo} source={{ uri: props.img }} />
        <Text style={BlockStyle.text}>
          {props.name}
          {props.surname}
          {"\n"}
          Рейтинг: {props.rating}
          {"\n"}
          Cтатус: {props.status === 1 ? "На работе" : "Оффлайн"}
          {"\n"}
        </Text>

        <ToggleButton.Group
          value={like}
          onValueChange={
            // ()=>setLike(!like)
            createTwoButtonAlert
          }
        >
          <ToggleButton
            value="watermelon"
            size={24}
            opacity={0.5}
            style={{
              position: "absolute",
              left: 60,
              backgroundColor: "rgba(7,7,7,0.1)",
              borderRadius: 10,
            }}
            color="white"
            icon={like ? "heart" : "heart-outline"}
          />
        </ToggleButton.Group>
      </View>
    </TouchableOpacity>
  );
}
