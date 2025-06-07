

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Text, View } from 'react-native'; // Import StyleSheet and other necessary components
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import StartScreen from '../Screens/StartScreen';

// const Tab = createBottomTabNavigator();

// const DairyScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Dairy</Text></View>;
// const MyProgressScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>My Progress</Text></View>;
// const ClassroomScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Classroom</Text></View>;
// const NotificationsScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Notifications</Text></View>;

// const BottomTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false, // Hide header for screens inside bottom tabs if you don't want them
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === 'Home') iconName = 'home';
//           else if (route.name === 'Dairy') iconName = 'book';
//           else if (route.name === 'My Progress') iconName = 'trending-up';
//           else if (route.name === 'Classroom') iconName = 'school';
//           else if (route.name === 'Notifications') iconName = 'notifications';

//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#007BFF', // Color of the icon and label for the active tab
//         tabBarInactiveTintColor: 'gray', // Color for inactive tabs
//         tabBarStyle: {
//           backgroundColor: '#FFFFFF', // Background color of the tab bar itself
//           borderTopWidth: 1,
//           borderTopColor: '#e0e0e0', // Subtle line at the top of the tab bar
//           height: 60, // Adjust height if needed
//           paddingBottom: 5, // Add some padding at the bottom for spacing
//           paddingTop: 5, // Add some padding at the top for spacing
//           // Shadow for Android (elevation) and iOS (shadow properties)
//           elevation: 10,
//           shadowColor: '#000',
//           shadowOffset: { width: 0, height: -2 }, // Shadow going upwards
//           shadowOpacity: 0.1,
//           shadowRadius: 5,
//         },
//         tabBarLabelStyle: {
//           fontSize: 12, // Font size for the tab labels
//           fontWeight: 'bold', // Make labels bold
//         },
//         tabBarItemStyle: {
//           // You can apply specific styles to each tab item here if needed
//           // For example, if you want different padding for each item
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={StartScreen} />
//       <Tab.Screen name="Dairy" component={DairyScreen} />
//       <Tab.Screen name="My Progress" component={MyProgressScreen} />
//       <Tab.Screen name="Classroom" component={ClassroomScreen} />
//       <Tab.Screen name="Notifications" component={NotificationsScreen} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabs;


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StartScreen from '../Screens/StartScreen';
import DairyScreen from './DairyScreen';
import MyProgressScreen from './MyProgress';
const Tab = createBottomTabNavigator();

//const DairyScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Dairy</Text></View>;
//const MyProgressScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>My Progress</Text></View>;
const ClassroomScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Classroom</Text></View>;
const NotificationsScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Notifications</Text></View>;

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Dairy') iconName = 'book';
          else if (route.name === 'My Progress') iconName = 'trending-up';
          else if (route.name === 'Classroom') iconName = 'school';
          else if (route.name === 'Notifications') iconName = 'notifications';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 110, // Increased height for better spacing
          paddingBottom: 45, // Increased padding to allow labels to display fully
          paddingTop: 10,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10, // Increased font size for readability
          fontWeight: 'bold',
        },
        tabBarItemStyle: {
          justifyContent: 'center',
        },
      })}
    >
      <Tab.Screen name="Home" component={StartScreen} />
      <Tab.Screen name="Dairy" component={DairyScreen} />
      <Tab.Screen name="My Progress" component={MyProgressScreen} />
      <Tab.Screen name="Classroom" component={ClassroomScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
