
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Tabs from './bottomscreeb/Tabs';
import InvoiceStackscreen from './InvoiceStackscreen';
import MessageStackscreen from './MessageStackscren';


export default function MainStackscreen() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="InvoiceStackscreen" component={InvoiceStackscreen} options={{ headerShown: false }} />
        <Stack.Screen name="MessageStackscreen" component={MessageStackscreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}