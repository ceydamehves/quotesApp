import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { StyleSheet,Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';


const SayingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor:'#fff' }}>
      <View style={styles.header}>        
        <TouchableOpacity style={styles.backButton}
                          onPress={() => {navigation.navigate('Home')}}>
        <Image style={styles.backImage}
                        source={require ('../assets/back.png')}/>
        </TouchableOpacity>
        <Image style={styles.headerTitle}
                        source={require ('../assets/Sayings.png')}/>
      </View>

      <ScrollView style={{ flex: 1 }}>
      <TouchableOpacity style={styles.quotes}
                          onPress={() => {navigation.navigate('SayingsM')}}>     
            <Text style={styles.text}>text</Text>
            <Image style={styles.forwardButton}
                        source={require ('../assets/forward.png')}/>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
}

export default SayingsScreen;

const styles = StyleSheet.create({
  header: {
    alignSelf:'center',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.25,
    backgroundColor:'#68C6E8', 
    borderBottomRightRadius: 180,
    borderBottomLeftRadius: 180,
    elevation: 8
  },
  headerTitle: {
    alignSelf:'center',
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.1,
  },
  backButton: {
    alignSelf:'center',
    marginTop: 75,
    marginRight: 130,
    height: 25,
    width: 25,
  },
  backImage: {
    alignSelf:'center',
    height: 27,
    width: 25,
  },
  forwardButton: {
    marginLeft: 15,
    alignSelf:'center',
    height: 20,
    width: 17,
  },
  quotes: {
    flexDirection:'row',
    alignSelf:'center',
    marginTop: 20,
    backgroundColor:'#68C6E8',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.12,
    borderRadius: 30,    
    elevation: 8
  },
  text: {
    alignSelf:'center',
    color: '#fff',
    marginLeft: 15,
    marginRight: 15,
    fontSize: 16
  }
})