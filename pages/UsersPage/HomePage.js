import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Tabs} from 'expo-router'


const HomePage = () => {
  return (
      <View >
        <Tabs>
          <Tabs.Screen name='Home Page'/>
          <Tabs.Screen name='Home Page' />
        </Tabs>
      </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
    paddingTop: 200,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
  },
});
