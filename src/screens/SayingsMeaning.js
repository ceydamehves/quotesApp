import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { StyleSheet,Dimensions } from 'react-native';
import {AdMobBanner} from 'react-native-admob';

const database = require('../databaseWord.json');

class SayingsMeaning extends React.Component{

  constructor (props) {
    super (props)
    date = new Date();
    this.state = {
      tr: database.months[date.getMonth()+1][date.getDate()]["tr"],
      en: database.months[date.getMonth()+1][date.getDate()]["en"],
    }
  }


render(){
  return (
    <View style={{ flex: 1, backgroundColor:'#fff' }}>
      <ImageBackground source={require ('../assets/bg.png')} style={styles.bg}>
      <View style={styles.header}>        
        <TouchableOpacity style={styles.backButton}
                          onPress={() => {this.props.navigation.navigate('Sayings')}}>
        <Image style={styles.backImage}
                        source={require ('../assets/back.png')}/>
        </TouchableOpacity>
        <Image style={styles.headerTitle}
                        source={require ('../assets/Sayings.png')}/>
      </View>

      <View style={{ flex: 1 , alignSelf:'center'}}>
        <View style={styles.title}>
          <Text style={styles.titleText}>TR</Text>
        </View>
        <View style={styles.textHolder}>
          <Text style={styles.text}>{this.state.tr}</Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>EN</Text>
        </View>
        <View style={styles.textHolder}>
          <Text style={styles.text}>{this.state.en}</Text>
        </View>

      </View>
      <View style={{marginTop: 40, height: Dimensions.get('window').height * 0.15,width: Dimensions.get('window').width * 0.7, alignItems:'center'}}>
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-3769777005365982/9569256693"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
      </View>
      </ImageBackground>
      </View>
  );
}
}
export default SayingsMeaning;

const styles = StyleSheet.create({
  bg:{
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 1
  },
  header: {
    alignSelf:'center',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.3,
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
    marginTop: 100,
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
    marginTop:35,
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
  },
  text: {
    alignSelf:'center', 
    marginTop:15, 
    marginLeft:10, 
    marginRight:10,
    color:'#E76F93',
    fontWeight:'bold',
    fontSize: 14
  }
})

