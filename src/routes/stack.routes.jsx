import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import CategoryScreen from '../screens/CategoryScreen';
import ItemsList from '../screens/ItemsList';

const StackRoutes = ({ route }) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Cardápio' component={CategoryScreen} initialParams={route.params} />
            <Stack.Screen name='Lista' component={ItemsList} />
        </Stack.Navigator>
    )
}

export default StackRoutes;
