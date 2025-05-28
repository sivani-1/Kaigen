
import {
  Image,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';


 const DetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.detailImage} />
      <Text style={styles.detailTitle}>{item.title}</Text>
      <Text style={styles.detailedDescription}>{item.detailedDescription}</Text>
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
  textOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    padding: 10,
    fontSize: 14,
    color: '#555',
  },
  detailImage: {
    width: '100%',
    height: 300,
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  detailedDescription: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default DetailScreen;
