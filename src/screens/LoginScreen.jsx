import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Alert, View } from "react-native";
import { Button, Text } from "react-native-paper";

const LoginScreen = ({ setAuthToken }) => {
  const handleLogin = async () => {
    try {
      setAuthToken("asdasdasdasd");
      await AsyncStorage.setItem("@authToken", "asdasdasdasd");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button onPress={handleLogin}>adsasd</Button>
    </View>
  );
};

export default LoginScreen;
