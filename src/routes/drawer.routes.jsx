import { createDrawerNavigator } from '@react-navigation/drawer'
import Teste from '../components/Teste';
import OfflineMenu from '../components/OfflineMenu';
import { getHeaderTitle } from '@react-navigation/elements';
import Header from '../components/Header';
import CategoryScreen from '../screens/CategoryScreen';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
                backgroundColor: '#212121',
                width: 200,
            },
            header: ({ navigation, route, options }) => {
                const title = getHeaderTitle(options, route.name);

                return <Header title={title} style={options.headerStyle} />;
            },
            drawerActiveBackgroundColor: '#fec80a',
            drawerActiveTintColor: '#212121',
            drawerInactiveTintColor: '#fff',
        }}>
            <Drawer.Screen name='Cardapio' component={StackRoutes} initialParams={{ title: 'Cardápio' }} />

            {/* <Drawer.Screen name='Cardápio offline' component={OfflineMenu} />
            <Drawer.Screen name='Cardápio' component={CategoryScreen} initialParams={{ title: 'Cardápio' }} /> */}
        </Drawer.Navigator>
    )
}