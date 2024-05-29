import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const Dashboard = ({navigation}) => {
  const [chartValue, setChartValue] = useState(0);
  const [userDetails , setUserDetails] = useState([]);
  const navigate = useNavigation();

  const getAllUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/register-user/get-all-user');
      const data = await response.json();
      console.log(data);
      setChartValue(data.users.length);
     
      const filteredUsers = data.users.filter(item => !item.isAdmin);
      setUserDetails(filteredUsers);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleClick = (item) => {
    console.log(item);
    // Perform any action you want on click
    navigation.navigate("userDetails",{userData:item});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Summary</Text>

      {/* Chart section */}
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

      <View style={styles.second_section}>
        <View style={styles.manage_user_section}>
          <Text style={styles.title}>Manage Users</Text>
          <FlatList
            data={userDetails}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>handleClick(item)}>
                <Text style={styles.item}>{item.email}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  manage_user_section: {
    width: '100%',
    marginTop: 16,
  },
  item: {
    padding: 15,
    fontSize: 18,
    color: "#fff",
    backgroundColor: "grey",
    marginVertical: 4,
    textAlign: 'left',
  },
  second_section: {
    marginTop: 16,
  }
});
