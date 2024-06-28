import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import rectangle from '../../../assets/Rectangle 4.png';

const Messagescreen = ({navigation}) => {
  return (
    <ScrollView>
      <Text style={styles.heading}>Rento</Text>
      <View style={{padding: 10,}}></View>
      <Image source={rectangle} />
      <View style={styles.spacer}></View>
      <Text style={styles.subheading}>Tenants chat Threads</Text>
      <View style={styles.spacer}></View>
      <View style={styles.container} onClick={() => navigation.navigate('Messageform',{ personName: 'Joe Goldberg' })}>
            <Text style={styles.ellipse1}>J</Text>
            <Text style={styles.content}>Joe Goldberg</Text>
            <Text style={styles.logo2}>2</Text>
      </View>
      <View style={styles.container} >
            <Text style={styles.ellipse2}>D</Text>
            <Text style={styles.content}>Don Drapper</Text>
            <Text style={styles.logo2}>2</Text>
      </View>
      <View style={styles.container} >
            <Text style={styles.ellipse3}>W</Text>
            <Text style={styles.content}>Walden Schmidt</Text>
            <Text style={styles.logo2}>2</Text>
      </View>
      <View style={styles.container} >
            <Text style={styles.ellipse4}>H</Text>
            <Text style={styles.content}>Harvey Spectre</Text>
            <Text style={styles.logo2}>2</Text>
      </View>
    </ScrollView>
  )
}

export default Messagescreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    paddingTop:20,
    paddingLeft:30,
  },
  spacer:{
    padding: 10,
  },
  subheading: {
    fontSize: 20,
    color: 'black', 
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 30,
  },
  container:{
    flexDirection:'row', 
    justifyContent:'space-between',
    width:'90%',
    height:'8%',
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 10,
    marginLeft:20,
    marginRight:500,
  },
  ellipse1:{
    width:40,
    height:40,
    borderRadius:50,
    backgroundColor:'#20b2aa',
    color:'black',
    paddingLeft:13,
    fontSize:22,
    marginLeft:10,
    marginBottom:15,
    paddingTop:5
  },
  ellipse2:{
    width:40,
    height:40,
    borderRadius:50,
    backgroundColor:'#90ee90',
    color:'black',
    paddingLeft:13,
    fontSize:22,
    marginLeft:10,
    marginBottom:15,
    paddingTop:5
  },
  ellipse3:{
    width:40,
    height:40,
    borderRadius:50,
    backgroundColor:'#ff8c00',
    color:'black',
    paddingLeft:13,
    fontSize:22,
    marginLeft:10,
    marginBottom:15,
    paddingTop:5
  },
  ellipse4:{
    width:40,
    height:40,
    borderRadius:50,
    backgroundColor:'#9B26B6',
    color:'black',
    paddingLeft:13,
    fontSize:22,
    marginLeft:10,
    marginBottom:15,
    paddingTop:5
  },
  content:{
      fontSize:20,
      fontWeight:'bold',
  },
  logo2:{
      width:25,
      height:25,
      borderRadius:'50%',
      backgroundColor:'#D9017A',
      color:'white',
      paddingLeft:7,
      fontSize:15,
      marginRight:10,      
      marginTop:10,
      paddingTop:4,
      fontWeight:'bold'
  },
})

