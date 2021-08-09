import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import { GetSalons } from "../../../redux/action";
import { ShowSalon } from "../../Modules";

function ViewHomeScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSalons());
  }, [dispatch]);

  const data = useSelector((state) => state.GetSalons.data);
  const showLoad = useSelector((state) => state.GetSalons.loading);

  const renderItem = ({ item }) => <ShowSalon {...item} nav={navigation} />;

  return (
    <View style={{ height: "99%" }}>
      <SafeAreaView>
        {showLoad ? (
          <ActivityIndicator style={{ marginTop: 15 }} />
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </SafeAreaView>
    </View>
  );
}
export default ViewHomeScreen;
