import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import BuyItems from './src/BuyItems';
import SellItems from './src/SellItems';
import MenCatalog from './src/MenCatalog';
import WomenCatalog from './src/WomenCatalog';
import KidsCatalog from './src/KidsCatalog';
import ClearanceCatalog from './src/ClearanceCatalog';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Swap Drobe' }}
        />
        <Stack.Screen name="BuyItems" component={BuyItems} />
        <Stack.Screen name="SellItems" component={SellItems} />
        <Stack.Screen name="MenCatalog" component={MenCatalog} />
        <Stack.Screen name="WomenCatalog" component={WomenCatalog} />
        <Stack.Screen name="KidsCatalog" component={KidsCatalog} />
        <Stack.Screen name="ClearanceCatalog" component={ClearanceCatalog} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
