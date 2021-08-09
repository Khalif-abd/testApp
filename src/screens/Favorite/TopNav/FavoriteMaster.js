import React, { useEffect } from "react";
import { View, ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ShowMaster } from "../../Modules";
import { GetFavoriteMasters } from "../../../redux/action";

function FavoriteMaster({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFavoriteMasters());
  }, [dispatch]);

  const data = useSelector((state) => state.GetFavoriteMasters.data);
  const showLoad = useSelector((state) => state.GetFavoriteMasters.loading);

  const renderItem = ({ item }) => <ShowMaster {...item} nav={navigation} />;

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

export default FavoriteMaster;
