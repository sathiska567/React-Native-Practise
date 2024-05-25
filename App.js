import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import SplashScreenPage from './pages/splashScreenPage';
import SignUp from './pages/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

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
      <Stack.Navigator initialRouteName="Login">
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
            }
          }}

        />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({

});
