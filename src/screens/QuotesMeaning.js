import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { StyleSheet,Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';


const QuotesMeaning = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Text> Quote Meaning Screen</Text>
    </View>
  );
}

export default QuotesMeaning;

