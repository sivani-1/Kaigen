
// 

import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Frame from '../../../assets/Frame (6).png';
import rectangle from '../../../assets/Rectangle 4.png';
import { useMessages } from './MessageContext';

const Messageform = ({ route, navigation }) => {
  const { personName } = route.params;
  const [message, setMessage] = useState('');
  const { messages, dispatch } = useMessages();

  const handleSend = () => {
    if (message.trim()) {
      dispatch({ type: 'ADD_MESSAGE', payload: { text: message, type: 'sent' } });
      setMessage('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Rento</Text>
        <Text
          style={styles.backButton}
          onPress={() => navigation.navigate('Messagescreen')}
        >
          Back
        </Text>
      </View>
      <View style={styles.spacer}></View>
      <Image source={rectangle} />
      <Text style={styles.subtitle}>Tenant chat : {personName}</Text>
      <View style={styles.spacer}></View>
      <View style={styles.formContainer}>
        <Text style={styles.receivedMessage}>Hi Ethan</Text>
        <Text style={styles.receivedMessage}>How are you</Text>
        {messages.map((msg, index) => (
          <View key={index} style={msg.type === 'sent' ? styles.sentMessage : styles.receivedMessage}>
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.spacer}></View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder='Type Something...'
          value={message}
          onChangeText={setMessage}
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Image source={Frame} style={{ alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Messageform;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 30,
  },
  backButton: {
    width: '25%',
    height: '40%',
    backgroundColor: '#D9017A',
    borderRadius: 20,
    color: 'white',
    alignItems: 'center',
    paddingLeft: 25,
    marginTop: 30,
    marginRight: 30,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  spacer: {
    padding: 5,
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  formContainer: {
    width: 360,
    minHeight: 320,
    backgroundColor: '#dcdcdc',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 10,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D9017A',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    fontSize: 16,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  messageText: {
    fontSize: 16,
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#dcdcdc',
    width: 300,
    height: 40,
    marginLeft: 20,
    paddingLeft: 20,
  },
  sendButton: {
    backgroundColor: '#D9017A',
    width: 50,
    height: 40,
    marginLeft: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
