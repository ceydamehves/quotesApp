import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { StyleSheet,Dimensions } from 'react-native';

const database = require('../databaseSayings.json');

class FamousWords extends React.Component{

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
      <View style={styles.header}>        
        <TouchableOpacity style={styles.backButton}
                          onPress={() => {this.props.navigation.navigate('Quotes')}}>
        <Image style={styles.backImage}
                        source={require ('../assets/back.png')}/>
        </TouchableOpacity>
        <Image style={styles.headerTitle}
                        source={require ('../assets/gununsozu.png')}/>
      </View>

      <ScrollView style={{ flex: 1 , alignSelf:'center'}}>
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

      </ScrollView>
      </View>
  );
}
}
export default FamousWords;

const styles = StyleSheet.create({
  header: {
    alignSelf:'center',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.25,
    backgroundColor:'#F6BA2F', 
    borderBottomRightRadius: 180,
    borderBottomLeftRadius: 180,
    elevation: 8
  },
  headerTitle: {
    alignSelf:'center',
    width: Dimensions.get('window').width * 0.5,
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
    backgroundColor:'#F6BA2F', 
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
    borderColor:'#F6BA2F'
  },
  text: {
    alignSelf:'center', 
    marginTop:15, 
    marginLeft:10, 
    marginRight:10,
    color:'#F6BA2F',
    fontWeight:'bold',
    fontSize: 14
  }
})

