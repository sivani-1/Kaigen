
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './SRC/Components/BottomTabs';
import DetailScreen from './SRC/Screens/DetailScreen';
import Login from './SRC/Screens/Login';
import Signup from './SRC/Screens/Signup';
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
