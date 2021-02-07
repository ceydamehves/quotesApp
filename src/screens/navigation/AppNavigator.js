import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen.js';
import QuotesScreen from '../QuotesScreen.js';
import SayingsScreen from '../SayingsScreen.js';
import IdiomsScreen from '../IdiomsScreen.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
 return (
   <Stack.Navigator>
     <Stack.Screen name='Home' component={HomeScreen} />
     <Stack.Screen name='Quotes' component={QuotesScreen} />
     <Stack.Screen name='Sayings' component={SayingsScreen} />
     <Stack.Screen name='Idioms' component={IdiomsScreen} />
   </Stack.Navigator>
 );
}

export default AppNavigator;