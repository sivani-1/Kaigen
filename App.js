import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';


import Login from './SRC/Screens/LoginSingup/Login/Login';

import MainStackscreen from './SRC/MainStackscreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name="Login" component={Login}/> 
        {/* <Stack.Screen name="Mainpage" component={Mainpage} />
        <Stack.Screen name="Tabs" component={Tabs} /> */}
         <Stack.Screen name="MainStackscreen" component={MainStackscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});