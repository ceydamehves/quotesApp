import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/screens/navigation/AppNavigator.js';

const App = () => {
 return (
  <NavigationContainer>
   <AppNavigator />
  </NavigationContainer>
 );
}

export default App;