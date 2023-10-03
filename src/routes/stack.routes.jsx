import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CategoryScreen from "../screens/CategoryScreen";
import ItemsList from "../screens/ItemsList";
import { View } from "react-native";
import { FAB } from "react-native-paper";
import colors from "../constants/colors";

const StackRoutes = ({ route }) => {
  const Stack = createStackNavigator();

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ width: 300, backgroundColor: "powderblue" }} />
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Cardápio"
            component={CategoryScreen}
            initialParams={route.params}
          />
          <Stack.Screen name="Lista" component={ItemsList} />
        </Stack.Navigator>
      </View>
      <FAB
        icon="cart"
        style={{
          position: "absolute",
          margin: 16,
          backgroundColor: colors.yellow,
          padding: 15,
          borderRadius: 99,
          right: 0,
          bottom: 0,
        }}
        onPress={() => {}}
      />
    </View>
  );
};

export default StackRoutes;
