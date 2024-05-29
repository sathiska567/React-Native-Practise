import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const Dashboard = () => {
  const [chartValue, setChartValue] = useState(0);

  const getAllUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/register-user/get-all-user');
      const data = await response.json();
      console.log(data);
      setChartValue(data.users.length);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Summary</Text>
        <View>
          <LineChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  data: [chartValue, chartValue + 2, 4, 5, 6, 2, 9],
                }
              ]
            }}
            width={Dimensions.get("window").width - 32} // Adjust for padding
            height={250}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#000",
              backgroundGradientTo: "#000",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#fff"
              },
              propsForBackgroundLines: {
                stroke: "#fff"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
            }}
          />
        </View>
        <View style={styles.manage_user_section}>
          <Text style={styles.title}>Manage Users</Text>
          <FlatList
            data={[
              { key: 'Devin' },
              { key: 'Dan' },
              { key: 'Dominic' },
              { key: 'Jackson' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
              { key: 'Jackson' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
  },
  scrollViewContent: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  manage_user_section: {
    width: '100%',
    marginTop: 16,
  },
  item: {
    padding: 10,
    fontSize: 18,
    color: "#fff",
    backgroundColor: "grey",
    marginVertical: 4,
    textAlign: 'center',
  },
});
