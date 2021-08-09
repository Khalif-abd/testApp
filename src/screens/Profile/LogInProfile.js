import React from "react";
import { useDispatch } from "react-redux";
import { Auth } from "../../redux/authAction";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from "react-native";

const LogInProfile = () => {
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.inner}>
            <TextInput
              placeholder="Моб. телефон"
              keyboardType="numeric"
              style={styles.textInput}
            />
            <View style={styles.btnContainer}>
              <Button
                title="Получить код"
                onPress={() => {
                  dispatch(Auth());
                }}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
export default LogInProfile;
