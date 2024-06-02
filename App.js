import { Image, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import SplashScreenPage from './pages/splashScreenPage';
import SignUp from './pages/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './pages/UsersPage/HomePage';
import Dashboard from './pages/Admin/DashBoad';
import UserDetails from './pages/Admin/UserDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './pages/UsersPage/Profile';
import AddCreate from './pages/UsersPage/AddCreate';
import BrowsAdd from './pages/UsersPage/BrowsAdd';
import Ionicons from 'react-native-vector-icons/Ionicons';
import image from "./assets/images/travel.png"


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home Page') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Add_Create') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';
        } else if (route.name === 'Brows_Add') {
          iconName = focused ? 'list' : 'list-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      
    })}
  >
    <Tab.Screen name="Home page" component={HomePage} options={{
      //  headerTitle: () => (
      //   // <Image
      //   //   source={image}
      //   //   style={{ width: '110vw', height: '25vh',marginLeft:"-25px",borderBottomRightRadius:"250px"}}
      //   // />
      // ),
      headerTitle:()=>(
        <>
        <Text style={styles.HomeHeaderSubTitle}>Welcome Travel Buddy </Text>
        <Text style={styles.HomeHeaderTitle}>Find Your Dream Destination </Text>
        </>
      ),
      headerStyle: styles.homePageHeader,
      headerTitleStyle:styles.HomeHeaderTitle

      }}/>

    <Tab.Screen name="Add_Create" component={AddCreate} />
    <Tab.Screen name="Brows_Add" component={BrowsAdd} />
    <Tab.Screen name="Profile" component={Profile} />

  </Tab.Navigator>
);

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 1000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  if (isShowSplash) {
    return <SplashScreenPage />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Page">
        <Stack.Screen
          name="Employee Login Page"
          component={LoginPage}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
            },
            headerStyle: {
              backgroundColor: '#fff',
              shadowColor: '#000', // For iOS
              shadowOffset: { width: 0, height: 2 }, // For iOS
              shadowOpacity: 0.2, // For iOS
              shadowRadius: 2, // For iOS
              elevation: 5, // For Android
            },
          }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home Page" component={MainTabNavigator} options={{ headerShown: false}} />
        <Stack.Screen name="userDetails" component={UserDetails} />
        <Stack.Screen name="dashboad" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  homePageHeader:{
    backgroundColor:"#000f89",
    height:"25vh",
    borderBottomWidth:0,
    borderBottomColor:"#000f89",
    borderBottomRightRadius:"120px",
    },

    HomeHeaderTitle:{
      color:"#fff",
      fontSize:25,
      fontWeight:"bold",
      fontFamily:"sans-serif",
      padding:"10px",
    },
    HomeHeaderSubTitle:{
      color:"#fff",
      fontSize:18,
      // fontWeight:"bold",
      fontFamily:"sans-serif",
      padding:"10px",
    },
});
