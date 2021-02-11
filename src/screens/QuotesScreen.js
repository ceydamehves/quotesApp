import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { StyleSheet,Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AdMobBanner} from 'react-native-admob';


const QuotesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor:'#fff' }}>
       <ImageBackground source={require ('../assets/bg.png')} style={styles.bg}>
      <View style={styles.header}>        
        <TouchableOpacity style={styles.backButton}
                          onPress={() => {navigation.navigate('Home')}}>
        <Image style={styles.backImage}
                        source={require ('../assets/back.png')}/>
        </TouchableOpacity>
        <Image style={styles.headerTitle}
                        source={require ('../assets/Quotes.png')}/>
      </View>

      <View style={{ flex: 0.8 , justifyContent:'center'}}>
        <TouchableOpacity style={styles.quotes}
                          onPress={() => {
                            navigation.navigate('QuotesM')}}>            
            <Text style={styles.text}>Günün 'quote' u</Text>
            <Image style={styles.forwardButton}
                        source={require ('../assets/forward.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quotes}
                          onPress={() => {
                            navigation.navigate('FamousW')}}>            
            <Text style={styles.text}>Günün Sözü</Text>
            <Image style={styles.forwardButton}
                        source={require ('../assets/forward.png')}/>
        </TouchableOpacity>
      </View>
      <View style={{height: Dimensions.get('window').height *0.15,position: 'absolute',bottom: 0,alignItems:'center'}}>
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-3769777005365982/9569256693"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      /></View>
      </ImageBackground>                        
    </View>
  );
}

export default QuotesScreen;

const styles = StyleSheet.create({
  bg:{
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 1
  },
  header: {
    alignSelf:'center',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.3,
    backgroundColor:'#7C76C9', 
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
  forwardButton: {
    flexDirection:'row',
    
    alignSelf:'center',
    height: 20,
    width: 17,
  },
  quotes: {
    flexDirection:'row',
    justifyContent:'center',
    alignSelf:'center',
    marginTop: 20,
    backgroundColor:'#7C76C9',
    width: Dimensions.get('window').width * 0.7,
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