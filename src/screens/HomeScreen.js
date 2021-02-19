import React from 'react';
import { StatusBar, View, Text, Button, TouchableOpacity, Image, ImageBackground, Linking } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet,Dimensions } from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor:'#fff' }}>
       <StatusBar backgroundColor='rgba(124, 118, 201, 0.5)' barStyle="light-content" />
      <View style = {{marginTop: 80, alignItems:'center', marginBottom: 20}}>
        <Image style={{width: Dimensions.get('window').width * 0.8,
                              height:100}}
                              source={require ('../assets/logo.png')}/></View>
      <View style={{width: Dimensions.get('window').width * 0.7}}>
        <TouchableOpacity style={styles.button}
                          onPress={() => {navigation.navigate('Quotes')}}>
        <Image style={styles.textImage}
                      source={require ('../assets/Quotes.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
                          onPress={() => {navigation.navigate('Sayings')}}>
        <Image style={styles.textImage}
                      source={require ('../assets/Sayings.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
                          onPress={() => {navigation.navigate('Idioms')}}>
        <Image style={styles.textImage}
                      source={require ('../assets/Idioms.png')}/>
        </TouchableOpacity>      
        
      </View>
        <View  style={{flexDirection: 'row-reverse'}}>
        <TouchableOpacity style={styles.socialButtonP}
                                onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.leacofapp.beautyncare')
                                .catch(err => console.error('An error occurred', err))}>
        <Image style={styles.socialImage}
                      source={require ('../assets/google-play.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonI}
                          onPress={() => Linking.openURL('https://www.instagram.com/leacofapp/')
                          .catch(err => console.error('An error occurred', err))}>
        <Image style={styles.socialImage}
                      source={require ('../assets/instagram.png')}/>
        </TouchableOpacity>
        </View>
        <View style={styles.circle}>
          <Text style={{fontSize:16, color:'rgba(212, 212, 230, 0.5)', marginBottom:350, alignSelf:'center' }}>leacofapp</Text>
        </View>
     
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  button: {      
      height: Dimensions.get('window').height * 0.1,
      backgroundColor: '#F6BA2F',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      borderBottomRightRadius: 30,
      borderTopRightRadius: 30,
      borderTopColor:'rgba(246, 186, 47, 0.6)',
      borderRightColor:'rgba(246, 186, 47, 0.6)',
      borderRightWidth:3,
      borderTopWidth:3,
      elevation: 2,     
  },
  socialButtonI: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.1,
    backgroundColor: '#68C6E8',
    marginTop: 30,
    elevation: 2,
    borderRadius: 30,
    borderLeftColor:'rgba(104, 198, 232, 0.7)',
    borderBottomColor:'rgba(104, 198, 232, 0.7)',
    borderRightColor:'rgba(104, 198, 232, 0.7)',
    borderRightWidth:3,
    borderBottomWidth:3,
    borderLeftWidth:3,   
  },
  socialButtonP: {
    alignItems:'flex-end',
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.1,
    backgroundColor: '#68C6E8',
    marginTop: 30,
    elevation: 2,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderLeftColor:'rgba(104, 198, 232, 0.7)',
    borderBottomColor:'rgba(104, 198, 232, 0.7)',
    borderBottomWidth:3,
    borderLeftWidth:3
  },
  socialImage: {
    alignSelf:'center',
    width: Dimensions.get('window').width * 0.13,
    height: Dimensions.get('window').height * 0.065,
    marginTop: 12
                       
  },
  circle: {
    flexDirection:'column-reverse', 
    alignSelf:'center', 
    marginTop: 40,
    height: 400,
    width: 400,
    backgroundColor:'rgba(124, 118, 201, 0.5)', 
    borderRadius: 200, 
  },
  textImage: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.1,
  }
})