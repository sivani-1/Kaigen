

import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import Invoiceform from './Invoice/Invoiceform';
import Invoicescreen from './Invoice/Invoicescreen';

const Stack = createStackNavigator();

const InvoiceStackscreen = () => {
  const [invoices, setInvoices] = useState([]);

  const addInvoice = (newInvoice) => {
    setInvoices([...invoices, newInvoice]);
  };

  return (
      <Stack.Navigator >
        <Stack.Screen name="Invoicescreen"  options={{ headerShown: false }} >
          {props => <Invoicescreen {...props} invoices={invoices} />}
        </Stack.Screen>
        <Stack.Screen name="Invoiceform" options={{ headerShown: false }}  >
          {props => <Invoiceform {...props} addInvoice={addInvoice} />}
        </Stack.Screen>
      </Stack.Navigator>
  );
};

export default InvoiceStackscreen;
