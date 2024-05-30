import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react'

const { width } = Dimensions.get('window');

// Import images using require
const images = [
  require('../../assets/images/daladamaligawa.png'),
  require('../../assets/images/galleFort.png'),
  require('../../assets/images/NineArch.png'),
  require('../../assets/images/seegiriya.png'),
];

const RecommendSlider = () => {
  return (
    <View>
      <FlatList
        data={images}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />
    </View>
  )
}

export default RecommendSlider

const styles = StyleSheet.create({
        imageContainer: {
                width: width * 0.8, // Adjust the width as needed
                height: 200, // Adjust the height as needed
                marginRight: 10, // Space between images
              },
              image: {
                width: '100%',
                height: '100%',
                borderRadius: 10, // Optional: to add rounded corners
              },
})