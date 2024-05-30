import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router'
import PopularSlider from './PopularSlider';
import RecommendSlider from './RecommendSlider';

const slidersData = [
  { key: 'popular', title: 'Popular', component: <PopularSlider /> },
  { key: 'recommend', title: 'Recommend', component: <RecommendSlider /> },
  { key: 'recommend', title: 'Most Viewed', component: <RecommendSlider /> },
];

const HomePage = () => {
  return (
    <FlatList
      data={slidersData}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
          <View>
            {item.component}
          </View>
        </View>
      )}
      keyExtractor={(item) => item.key}
    />
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#000f89',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
