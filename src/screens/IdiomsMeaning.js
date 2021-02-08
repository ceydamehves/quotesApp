import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { StyleSheet,Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';


const IdiomsMeaning = () => {
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
                        source={require ('../assets/Idioms.png')}/>
      </View>

      <ScrollView style={{ flex: 1 , alignSelf:'center'}}>
        <View style={styles.title}>
          <Text style={styles.titleText}>TR</Text>
        </View>
        <View style={styles.textHolder}>
          <Text style={{alignSelf:'center'}}>bla bla bla</Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>EN</Text>
        </View>
        <View style={styles.textHolder}>
          <Text style={{alignSelf:'center'}}>bla bla bla</Text>
        </View>

      </ScrollView>
      </View>
  );
}

export default IdiomsMeaning;

const styles = StyleSheet.create({
  header: {
    alignSelf:'center',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.25,
    backgroundColor:'#E76F93', 
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
  title: {
    marginTop:20,
    marginRight: 300, 
    height:30, 
    width:50 , 
    backgroundColor:'#E76F93', 
    borderRadius: 20, 
    elevation:5
  },
  titleText: {
    alignSelf:'center', 
    marginTop: 4, 
    color:'#fff', 
    fontSize:16, 
    fontWeight:'bold'
  },
  textHolder: {
    backgroundColor:'#fff',
    marginTop:10, 
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.12, 
    borderRadius: 30, 
    borderWidth: 3, 
    borderColor:'#E76F93'
  }
})

