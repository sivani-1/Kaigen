import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Frame2 from '../../assets/Frame (2).png';
import Frame3 from '../../assets/Frame (3).png';
import Frame4 from '../../assets/Frame (4).png';
import Frame5 from '../../assets/Frame (5).png';
import rectangle from '../../assets/Rectangle 5.png';

const Invoicescreen = ({ invoices, navigation }) => {
  return (
    <ScrollView>
      <Text style={styles.title}>Rento</Text>
      <View style={styles.spacer}></View>
      <Image source={rectangle} />
      <View style={styles.spacer}></View>
      <Text style={styles.subtitle}>Tenant Rent Invoices</Text>
      <View style={styles.spacer}></View>
      <View style={styles.invoiceContainer}>
          <Text style={styles.invoiceId}>Invoice ID #92</Text>
          <View style={styles.infoRow}>
            <Image source={Frame2} style={styles.icon} />
            <Text style={styles.infoText}>Don Draper</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoRow}>
            <Image source={Frame3} style={styles.icon} />
            <Text style={styles.infoText}>$400</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoRow}>
            <Image source={Frame4} style={styles.icon} />
            <Text style={styles.infoText}>22/07/24</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoRow}>
            <Image source={Frame5} style={styles.icon} />
            <Text style={styles.paidStatus}>Paid</Text>
          </View>
        </View>
        <View style={styles.invoiceContainer}>
          <Text style={styles.invoiceId}>Invoice ID #93</Text>
          <View style={styles.infoRow}>
            <Image source={Frame2} style={styles.icon} />
            <Text style={styles.infoText}>Joe Goldberg</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoRow}>
            <Image source={Frame3} style={styles.icon} />
            <Text style={styles.infoText}>$600</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoRow}>
            <Image source={Frame4} style={styles.icon} />
            <Text style={styles.infoText}>28/08/24</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoRow}>
            <Image source={Frame5} style={styles.icon} />
            <Text style={styles. dueStatus}>Due</Text>
          </View>
        </View>
      {invoices.map((invoice, index) => (
        <View style={styles.invoiceContainer} key={index}>
          <Text style={styles.invoiceId}>Invoice ID # {invoice.count}</Text>
          <View style={styles.infoRow}>
            <Image source={Frame2} style={styles.icon} />
            <Text style={styles.infoText}>{invoice.tenant}</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoRow}>
            <Image source={Frame3} style={styles.icon} />
            <Text style={styles.infoText}>{invoice.amount}</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoRow}>
            <Image source={Frame4} style={styles.icon} />
            <Text style={styles.infoText}>{invoice.date}</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.infoRow}>
            <Image source={Frame5} style={styles.icon} />
            <Text style={[
                invoice.status === 'Paid' ? styles.paidStatus : styles.dueStatus,
              ]}>{invoice.status}</Text>
          </View>
        </View>
      ))}
      <View style={styles.spacer}></View>
      <TouchableOpacity onPress={() => navigation.navigate('Invoiceform')}>
        <Text style={styles.addButton}>Add Invoice</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Invoicescreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 30,
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 30,
  },
  spacer: {
    padding: 5,
  },
  invoiceContainer: {
    width: 350,
    height: 400,
    backgroundColor: '#dcdcdc',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  invoiceId: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 30,
    paddingTop: 5,
    padding: 5,
  },
  icon: {
    alignItems: 'flex-start',
    width: 40,
    height: 20,
    padding: 20,
  },
  infoText: {
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: 'gray',
    marginLeft: 30,
    marginTop: 7,
  },
  addButton: {
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
  paidStatus: {
    backgroundColor:'green',
    borderRadius:7,
    width:'20%',
    height:'70%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:7,
    paddingTop:5,
    paddingLeft:15,
    marginRight:15,
    marginLeft:20,
  },
  dueStatus: {
    backgroundColor:'yellow',
    borderRadius:7,
    width:'20%',
    height:'70%',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:5,
    marginTop:7,
    paddingLeft:15,
    marginLeft:20,
  }
});
