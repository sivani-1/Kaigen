import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DairyScreen = () => {
  // Unified data structure with classwork and homework for each subject
  const [subjects, setSubjects] = useState([
    {
      id: '1',
      subject: 'Math',
      classwork: 'Introduction to Algebra',
      homework: 'Solve 10 equations',
      completed: false,
    },
    {
      id: '2',
      subject: 'Science',
      classwork: 'Learn Photosynthesis',
      homework: 'Read Chapter 5',
      completed: false,
    },
    {
      id: '3',
      subject: 'History',
      classwork: 'World War II overview',
      homework: 'Research major events of WWII',
      completed: false,
    },
    {
      id: '4',
      subject: 'English',
      classwork: 'Poetry Analysis',
      homework: 'Write a poem on nature',
      completed: false,
    },
  ]);

  const formatDate = () => {
    const today = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();
    const dayName = dayNames[today.getDay()]; // Get the day name

    return `${dayName}, ${day}/${month}/${year}`;
  };

  const currentDate = formatDate();

  // Function to toggle homework completion
  const toggleCompletion = (id) => {
    setSubjects((prevSubjects) =>
      prevSubjects.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with Date */}
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Daily Work</Text>
        <Text style={styles.date}>{currentDate}</Text>
      </View>

      {/* Subjects with Classwork and Homework */}
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.boldLabel}>Classwork:</Text>
            <Text style={styles.details}>{item.classwork}</Text>
            <View style={styles.homeworkRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.boldLabel}>Homework:</Text>
                <Text style={styles.details}>{item.homework}</Text>
              </View>
              <TouchableOpacity onPress={() => toggleCompletion(item.id)}>
                <Icon
                  name={item.completed ? 'check-circle' : 'radio-button-unchecked'}
                  size={24}
                  color={item.completed ? 'green' : 'gray'}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    //marginTop: 50
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  subject: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  boldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  homeworkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default DairyScreen;
