import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import { ShowSalon } from "../../Modules";
import { GetFavoriteSalons } from "../../../redux/action";

function FavoriteSalon({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFavoriteSalons());
  }, [dispatch]);

  const data = useSelector((state) => state.GetFavoriteSalons.data);
  const showLoad = useSelector((state) => state.GetFavoriteSalons.loading);

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
            refreshing={showLoad}
          />
        )}
      </SafeAreaView>
    </View>
  );
}
export default FavoriteSalon;
