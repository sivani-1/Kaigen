import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Messageform from './Screens/Message/Messageform';
import Messagescreen from './Screens/Message/Messagescreen';

import { MessageProvider } from './Screens/Message/MessageContext';

const Stack = createStackNavigator();


export default function MessageStackscreen() {
  return (
    <MessageProvider>
        <Stack.Navigator >
          <Stack.Screen name="Messagescreen" component={Messagescreen} options={{ headerShown: false }} ></Stack.Screen>
          <Stack.Screen name="Messageform" component={Messageform} options={{ headerShown: false }}  ></Stack.Screen>
      </Stack.Navigator>
    </MessageProvider>
  );
}


