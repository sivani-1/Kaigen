
// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';


// const data = [
//   {
//     id: 1,
//     title: 'Mountain View',
//     image: 'https://tse3.mm.bing.net/th?id=OIP.jbj9aKgbfYotCyMB4I3T8wHaFq&pid=Api&P=0&h=180',
//     description: 'A beautiful mountain view during sunset.',
//     detailedDescription:
//       'This mountain view captures the stunning colors of the sunset with the serene landscape providing a tranquil experience.',
//   },
//   {
//     id: 2,
//     title: 'Ocean Breeze',
//     image: 'https://tse2.mm.bing.net/th?id=OIP.Iy8kU9JHLYjEvVYvlMDGPAHaE8&pid=Api&P=0&h=180',
//     description: 'Relaxing ocean waves.',
//     detailedDescription:"he ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it The ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway. making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway. a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway."
//   },
//   // Add more items as needed
// ];


//   const StartScreen = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       {data.map((item) => (
//         <TouchableOpacity
//           key={item.id}
//           style={styles.card}
//           onPress={() => navigation.navigate('DetailScreen', { item })}>
//           <Image source={{ uri: item.image }} style={styles.image} />
//           <View style={styles.textOverlay}>
//             <Text style={styles.title}>{item.title}</Text>
//           </View>
//           <Text style={styles.description}>{item.description}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   card: {
//     marginBottom: 20,
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#f9f9f9',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//   },
//   textOverlay: {
//     position: 'absolute',
//     top: 10,
//     left: 10,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 5,
//     borderRadius: 5,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   description: {
//     padding: 10,
//     fontSize: 14,
//     color: '#555',
//   },
//   detailImage: {
//     width: '100%',
//     height: 300,
//   },
//   detailTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 10,
//     textAlign: 'center',
//   },
//   detailedDescription: {
//     fontSize: 16,
//     color: '#333',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
// });

// export default StartScreen;

                        // with like share comment

// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const data = [
//   {
//     id: 1,
//     title: 'Mountain View',
//     image: 'https://tse3.mm.bing.net/th?id=OIP.jbj9aKgbfYotCyMB4I3T8wHaFq&pid=Api&P=0&h=180',
//     description: 'A beautiful mountain view during sunset.',
//     detailedDescription:
//       'This mountain view captures the stunning colors of the sunset with the serene landscape providing a tranquil experience.',
//   },
//   {
//     id: 2,
//     title: 'Ocean Breeze',
//     image: 'https://tse2.mm.bing.net/th?id=OIP.Iy8kU9JHLYjEvVYvlMDGPAHaE8&pid=Api&P=0&h=180',
//     description: 'Relaxing ocean waves.',
//     detailedDescription: "he ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it The ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway. making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway. a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.",
//   },
//   // Add more items as needed
// ];

// const StartScreen = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       {data.map((item) => (
//         <TouchableOpacity
//           key={item.id}
//           style={styles.card}
//           onPress={() => navigation.navigate('DetailScreen', { item })}>
//           <Image source={{ uri: item.image }} style={styles.image} />
//           <View style={styles.textOverlay}>
//             <Text style={styles.title}>{item.title}</Text>
//           </View>
//           <Text style={styles.description}>{item.description}</Text>
//           <View style={styles.iconRow}>
//             <Icon name="thumb-up" size={24} color="#555" style={styles.icon} />
//             <Icon name="share" size={24} color="#555" style={styles.icon} />
//             <Icon name="comment" size={24} color="#555" style={styles.icon} />
//           </View>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   card: {
//     marginBottom: 20,
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#f9f9f9',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//   },
//   textOverlay: {
//     position: 'absolute',
//     top: 10,
//     left: 10,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 5,
//     borderRadius: 5,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   description: {
//     padding: 10,
//     fontSize: 14,
//     color: '#555',
//   },
//   iconRow: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     marginTop: 10,
//   },
//   icon: {
//     marginHorizontal: 5,
//   },
// });

// export default StartScreen;


import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  {
    id: 1,
    title: 'Mountain View',
    image: 'https://tse3.mm.bing.net/th?id=OIP.jbj9aKgbfYotCyMB4I3T8wHaFq&pid=Api&P=0&h=180',
    description: 'A beautiful mountain view during sunset.',
    detailedDescription:
      'This mountain view captures the stunning colors of the sunset with the serene landscape providing a tranquil experience.',
  },
  {
    id: 2,
    title: 'Ocean Breeze',
    image: 'https://tse2.mm.bing.net/th?id=OIP.Iy8kU9JHLYjEvVYvlMDGPAHaE8&pid=Api&P=0&h=180',
    description: 'Relaxing ocean waves.',
    detailedDescription: "he ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it The ocean breeze and waves provide a calming effect, making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway. making it a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway. a perfect getaway.The ocean breeze and waves provide a calming effect, making it a perfect getaway.",
  },
  // Add more items as needed
];

const StartScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => navigation.navigate('DetailScreen', { item })}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.bottomRow}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.iconRow}>
              <Icon name="thumb-up" size={24} color="#555" style={styles.icon} />
              <Icon name="share" size={24} color="#555" style={styles.icon} />
              <Icon name="comment" size={24} color="#555" style={styles.icon} />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  description: {
    padding: 10,
    fontSize: 14,
    color: '#555',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#555',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default StartScreen;



