import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Frame2 from '../../assets/Frame (2).png';
import Frame3 from '../../assets/Frame (3).png';
import Frame4 from '../../assets/Frame (4).png';
import Frame5 from '../../assets/Frame (5).png';
import rectangle from '../../assets/Rectangle 5.png';

const Invoiceform = ({navigation, addInvoice}) => {
  const [tenant, setTenant] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Load count from AsyncStorage when component mounts
    loadCount();
  }, []);

  const loadCount = async () => {
    try {
      const savedCount = await AsyncStorage.getItem('invoiceCount');
      if (savedCount !== null) {
        setCount(parseInt(savedCount, 10)); // Parse count from string to integer
      }
    } catch (error) {
      console.error('Error loading count from AsyncStorage:', error);
    }
  };

  const saveCount = async (newCount) => {
    try {
      await AsyncStorage.setItem('invoiceCount', newCount.toString()); // Store count as string
    } catch (error) {
      console.error('Error saving count to AsyncStorage:', error);
    }
  };

  const handleSubmit = () => {
    if (!tenant || !amount || !date || !status) {
      alert('Incomplete Form. Please enter all details before submitting');
      <Text>Incomplete Form', 'Please enter all details before submitting</Text>
      return;
    }

    const newCount=count+1;
    setCount(newCount);
    saveCount(newCount);
    const newInvoice = {
      tenant,
      amount,
      date,
      status,
      count:newCount,
    };
    console.log(newInvoice);
    addInvoice(newInvoice);
    navigation.navigate('Invoicescreen');
  };

  return (
    <ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>Rento</Text>
        <Text
          style={styles.backButton}
          onPress={() => navigation.navigate('Invoicescreen')}
        >
          Back
        </Text>
      </View>
      <View style={styles.spacer}></View>
      <Image source={rectangle} />
      <View style={styles.spacer}></View>
      <Text style={styles.subtitle}>New Tenant Invoice</Text>
      <View style={styles.spacer}></View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Image source={Frame2} style={styles.icon} />
          <TextInput
            placeholder='Enter Tenant'
            style={styles.input}
            value={tenant}
            onChangeText={setTenant}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={Frame3} style={styles.icon} />
          <TextInput
            placeholder='Enter Amount'
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={Frame4} style={styles.icon} />
          <TextInput
            placeholder='Enter Date'
            style={styles.input}
            value={date}
            onChangeText={setDate}
          />
        </View>
        <View style={styles.statusContainer}>
          <Image source={Frame5} style={styles.icon} />
          <Text style={styles.statusText}>Status</Text>
          
          <Text onPress={() => setStatus('Paid')} style={styles.statusOptionpaid} >Paid</Text>
          <Text onPress={() => setStatus('Due')} style={styles.statusOptiondue} >Due</Text>
        </View>
      </View>
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.submitButton}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Invoiceform;

const styles = StyleSheet.create({
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
    justifyContent:'center',
    paddingBottom:5,
  },
  spacer: {
    padding: 5,
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 30,
  },
  formContainer: {
    width: 350,
    height: 350,
    backgroundColor: '#dcdcdc',
    alignSelf: 'center',
    borderRadius: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '85%',
    height: '15%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    color: 'black',
    marginLeft: 30,
    marginTop: 25,
    paddingTop: 5,
    padding: 5,
  },
  icon: {
    alignItems: 'flex-start',
    width: 40,
    height: 20,
    padding: 20,
  },
  input: {
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 22,
  },
  statusContainer: {
    flexDirection: 'row',
    width: '85%',
    height: '15%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    color: 'black',
    marginLeft: 30,
    marginTop: 28,
    paddingTop: 5,
    padding: 5,
  },
  statusText: {
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 22,
    marginRight:20
  },
  submitButton: {
    width: '80%',
    backgroundColor: '#D9017A',
    borderRadius: 100,
    borderColor: '#ffffff',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    marginLeft: 30,
    marginBottom: 20,
  },
  statusOptionpaid: {
    backgroundColor:'green',
    borderRadius:7,
    width:'20%',
    height:'50%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:7,
    paddingLeft:15,
    marginRight:15
  },
  statusOptiondue: {
    backgroundColor:'yellow',
    borderRadius:7,
    width:'20%',
    height:'50%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:7,
    paddingLeft:15,
  },
  
});


