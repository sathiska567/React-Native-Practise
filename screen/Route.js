import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LoginPage from './pages/LoginPage';
import splashScreenPage from './pages/splashScreenPage';
import { createStackNavigator } from '@react-navigation/stack';


const Drower = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drower.Navigator initialRouteName='login'>
        <Drower.Screen name='login' component={LoginPage} />
        <Drower.Screen name='spalsh' component={splashScreenPage}/>
      </Drower.Navigator>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})