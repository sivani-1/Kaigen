// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StyleSheet } from 'react-native';


// import Login from './SRC/Screens/LoginSingup/Login/Login';

// import MainStackscreen from './SRC/MainStackscreen';



// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//         headerShown: false,
//         animation: 'slide_from_right'
//       }}>
//         <Stack.Screen name="Login" component={Login}/> 
//          <Stack.Screen name="MainStackscreen" component={MainStackscreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

// });


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './SRC/Screens/DetailScreen';
import Login from './SRC/Screens/Login';
import Signup from './SRC/Screens/Signup';
//import StartScreen from './SRC/Screens/StartScreen';
import BottomTabs from './SRC/Components/BottomTabs';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
         <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

