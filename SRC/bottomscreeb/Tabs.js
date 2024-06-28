

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native';
const Tab = createMaterialBottomTabNavigator();

import Frame1 from '../../assets/Frame (1).png';
import Frame from '../../assets/Frame.png';

import InvoiceStackscreen from '../InvoiceStackscreen';
import MessageStackscreen from '../MessageStackscren';
const Tabs = () => {
  return (
    <Tab.Navigator
      
    >
      <Tab.Screen
        name="Message"
        component={MessageStackscreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{  width: 100,alignItems:'center' }}>
              <Image
                source={Frame}
                resizeMode="contain"
                style={{ width: 30, height: 30, tintColor: focused ? '#e32f45' : '#748c94',alignItems:'center',paddingTop:10 }}
              />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 22,paddingTop:5 }}>Message</Text>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Invoice"
        component={InvoiceStackscreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{  width: 100,alignItems:'center' }}>
              <Image
                source={Frame1}
                resizeMode="contain"
                style={{ width: 30, height: 30, tintColor: focused ? '#e32f45' : '#748c94',alignItems:'center',paddingTop:10 }}
              />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 22,paddingTop:5 }}>Invoice</Text>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;

