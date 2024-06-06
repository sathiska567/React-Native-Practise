import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

// Define image data with titles
const imageData = [
  { id: 1, image: require('../../assets/images/daladamaligawa.png'), title: 'Dalada Maligawa', rating: 4 },
  { id: 2, image: require('../../assets/images/galleFort.png'), title: 'Galle Fort', rating: 5 },
  { id: 3, image: require('../../assets/images/NineArch.png'), title: 'Nine Arch Bridge', rating: 3 },
  { id: 4, image: require('../../assets/images/seegiriya.png'), title: 'Sigiriya', rating: 4 },
];

const Slider = () => {
  const [ratings, setRatings] = useState(imageData);

  const handleStarPress = (itemId, itemIndex) => {
    console.log(itemId, itemIndex);
    console.log(ratings);
  
    const newRatings = ratings.map(data => {
      if (data.id === itemId) {
        return { ...data, rating: itemIndex+1 };
      }
      return data;
    });
  
    setRatings(newRatings);
  };
  

  return (
    <View style={styles.card}>
      <FlatList
        data={ratings}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 8 }}>
              {[...Array(5)].map((_, index) => (
                <TouchableOpacity key={index} onPress={() => handleStarPress(item.id, index)}>
                  <Ionicons
                    name={index < item.rating ? 'star' : 'star-outline'}
                    size={20}
                    color="gold"
                  />
                </TouchableOpacity>
              ))}

              <TouchableOpacity>

              <Text style={styles.paragraph}>see review</Text>

              </TouchableOpacity>
            </View>
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
    height: 280, // Adjust the height as needed
    marginRight: 10, // Space between images
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10, // Optional: to add rounded corners
    marginBottom:20
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
    textAlign: 'left', // Center the title
  },
  paragraph: {
    color: 'grey',
    marginLeft:150
  },
});
