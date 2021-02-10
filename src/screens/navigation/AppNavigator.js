import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen.js';
import QuotesScreen from '../QuotesScreen.js';
import SayingsScreen from '../SayingsScreen.js';
import IdiomsScreen from '../IdiomsScreen.js';
import QuotesMeaning from '../QuotesMeaning.js';
import SayingsMeaning from '../SayingsMeaning.js';
import IdiomsMeaning from '../IdiomsMeaning.js';
import FamousWords from '../FamousWords.js';


const Stack = createStackNavigator();

const AppNavigator = () => {
 return (
   <Stack.Navigator screenOptions={{headerShown: false}}>
     <Stack.Screen name='Home' component={HomeScreen} />
     <Stack.Screen name='Quotes' component={QuotesScreen} />
     <Stack.Screen name='Sayings' component={SayingsScreen} />
     <Stack.Screen name='Idioms' component={IdiomsScreen} />
     <Stack.Screen name='QuotesM' component={QuotesMeaning} />
     <Stack.Screen name='SayingsM' component={SayingsMeaning} />
     <Stack.Screen name='IdiomsM' component={IdiomsMeaning} />
     <Stack.Screen name='FamousW' component={FamousWords} />

   </Stack.Navigator>
 );
}

export default AppNavigator;