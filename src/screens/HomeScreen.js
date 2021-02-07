import React from 'react';
import { View, Text, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Quotes"
        onPress={() => {
            navigation.navigate('Quotes')}}
      />
      <Button
        title="Sayings"
        onPress={() => {
            navigation.navigate('Sayings')}}
      />
      <Button
        title="Idioms"
        onPress={() => {
            navigation.navigate('Idioms')}}
      />
    </View>
  );
}

export default HomeScreen;