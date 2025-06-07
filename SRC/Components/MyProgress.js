import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const MyProgressScreen= () => {
  // Data for Bar Chart (Marks in Assignments)
  const barChartData = {
    labels: ['Math', 'Science', 'History', 'English'],
    datasets: [
      {
        data: [85, 75, 90, 95], // Example marks for each subject
      },
    ],
  };

  // Data for Pie Chart (Assignment Progress)
  const pieChartData = [
    { name: 'Completed', population: 7, color: '#007BFF', legendFontColor: '#007BFF', legendFontSize: 15 },
    { name: 'Pending', population: 3, color: '#FF6347', legendFontColor: '#FF6347', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Progress</Text>

      {/* Bar Chart */}
      <Text style={styles.chartTitle}>Marks in Assignments</Text>
      <BarChart
        data={barChartData}
        width={screenWidth - 20}
        height={220}
        yAxisSuffix="%"
        chartConfig={{
          backgroundColor: '#f5f5f5',
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 10,
          },
        }}
        style={styles.chart}
      />

      {/* Pie Chart */}
      <Text style={styles.chartTitle}>Assignment Progress</Text>
      <PieChart
        data={pieChartData}
        width={screenWidth - 20}
        height={220}
        chartConfig={{
          backgroundColor: '#f5f5f5',
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 10,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    //marginTop: 50,
    color: '#333',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#555',
  },
  chart: {
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default MyProgressScreen;
