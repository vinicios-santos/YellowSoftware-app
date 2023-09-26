import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { NavigationContainer } from '@react-navigation/native'
import DrawerRoutes from './src/routes/drawer.routes';
import colors from './src/constants/colors';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [authToken, setAuthToken] = React.useState(null);

  const setAuthTokenStorage = async () => {
    try {
      const authToken = await AsyncStorage.getItem('@authToken');

      setAuthToken(authToken);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    setAuthTokenStorage();
  }, [authToken])

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }

  changeScreenOrientation();

  if (!authToken) {
    return <LoginScreen setAuthToken={setAuthToken} />
  }

  return (
    <NavigationContainer >
      <DrawerRoutes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
  },
});
