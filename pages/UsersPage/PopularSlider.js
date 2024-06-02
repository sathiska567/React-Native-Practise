import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');

// Define image data with titles
const imageData = [
  { image: require('../../assets/images/daladamaligawa.png'), title: 'Dalada Maligawa' },
  { image: require('../../assets/images/galleFort.png'), title: 'Galle Fort' },
  { image: require('../../assets/images/NineArch.png'), title: 'Nine Arch Bridge' },
  { image: require('../../assets/images/seegiriya.png'), title: 'Sigiriya' },
];

const Slider = () => {
  return (
    <View style={styles.card}>
      <FlatList
        data={imageData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
                        <Text>Rating</Text>

            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  imageContainer: {
    width: width * 0.8, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    marginRight: 10, // Space between images
  },
  image: {
    width: '100%',
    height: '100%',
    // marginTop:"10%",
    borderRadius: 10, // Optional: to add rounded corners
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3, // for Android
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
    textAlign: 'center', // Center the title
  },
});
