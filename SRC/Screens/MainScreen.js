// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BottomTabs from '../Components/BottomTabs';
// import DetailScreen from './DetailScreen';
// import StartScreen from './StartScreen';
// const Stack = createNativeStackNavigator();

// export default function MainScreen() {
//   return (
//       <Stack.Navigator screenOptions={{
//         headerShown: false,
//         animation: 'slide_from_right'
//       }}>
//         <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
//         <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//   );
// }

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../Components/BottomTabs'; // Import BottomTabs
import DetailScreen from './DetailScreen'; // Import DetailScreen

const Stack = createNativeStackNavigator();

export default function MainScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabs} /> {/* Tabs always visible */}
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
