import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { formHead, formIcon, formPara, formbtn } from '../../../CommonCss/formcss';
import { containerFull } from '../../../CommonCss/pagecss';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import Frame3 from '../../../../assets/1564520_code_open_password_icon 1.png';
import Frame2 from '../../../../assets/Frame (2).png';

const Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'ethan.hunt' && password === 'entity!2025') {
        navigation.navigate('MainStackscreen');
        
    } else {
        alert(
            'Invalid Credentials. The username or password you entered is incorrect.Username: ethan.hunt Password: entity!2025'
          );
    }
  };

    return (
        <View style={containerFull}>
            {/* <Image source={logo} style={logo1}/> */}
            <Text style={formHead}>Rento</Text>
            <Text style={formPara}>All-in-1 Rent App</Text>
            <View style={{padding: 30,}}></View>
            <View style={{flexDirection:'row', width: '80%',backgroundColor: '#dcdcdc',borderWidth: 1,borderRadius: 10,marginVertical: 10,paddingHorizontal: 15,paddingVertical: 10,fontSize: 20,fontWeight:'bold',color: 'black'}}>
                <Image source={Frame2} style={formIcon}/>
                <TextInput placeholder='Enter Username' style={{paddingLeft:10}} value={username} onChangeText={setUsername}/>
            </View>
            <View style={{flexDirection:'row', width: '80%',backgroundColor: '#dcdcdc',borderWidth: 1,borderRadius: 10,marginVertical: 10,paddingHorizontal: 15,paddingVertical: 10,fontSize: 20,fontWeight:'bold', color: 'black'}}>
                <Image source={Frame3} style={formIcon}/>
                <TextInput placeholder='Enter Password' style={{paddingLeft:10}} secureTextEntry={true} value={password} onChangeText={setPassword}/>
            </View>
            <View style={{padding: 15,}}></View>
            {/* <Text style={formTextLinkRight} onPress={() => navigation.navigate('ForgotPassword_EnterEmail')}>Forgot password</Text> */}
            <Text style={formbtn} onPress={handleLogin}>Login</Text>
            {/* <View style={hr80}></View>
            <Text style={formTextLinkCenter}>Dont have an account ? 
                <Text style={{color: 'white'}} onPress={() => navigation.navigate('Signup_EnterEmail')}>Signup</Text>
            </Text> */}
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({})