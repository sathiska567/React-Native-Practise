import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, FlatList, Image, StyleSheet, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

// Define image data with titles
const imageData = [
  { id: 1, image: require('../../assets/images/daladamaligawa.png'), title: 'Dalada Maligawa', rating: 4 },
  { id: 2, image: require('../../assets/images/galleFort.png'), title: 'Galle Fort', rating: 5 },
  { id: 3, image: require('../../assets/images/NineArch.png'), title: 'Nine Arch Bridge', rating: 3 },
  { id: 4, image: require('../../assets/images/seegiriya.png'), title: 'Sigiriya', rating: 4 },
];

const BrowsAdd = () => {
  const [postDetails, setPostDetails] = useState([]);
  const [ratings, setRatings] = useState(imageData);

  // Get all post details
  const getAllDetails = async () => {
    try {
      const response = await axios.get('http://localhost:3000/add-create-details/get-created-adds');
      console.log(response);
      if (response.data.success) {
        setPostDetails(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleStarPress = (itemId, itemIndex) => {
    console.log(itemId, itemIndex);
    console.log(ratings);

    const newRatings = ratings.map(data => {
      if (data.id === itemId) {
        return { ...data, rating: itemIndex + 1 };
      }
      return data;
    });

    setRatings(newRatings);
  };

  useEffect(() => {
    getAllDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.filterSection}>Add your favourite places</Text>
      <ScrollView>
        <FlatList
          data={ratings}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                {postDetails[index] && (
                  <Text key={postDetails[index]._id} style={styles.title}>
                    {postDetails[index].location}
                  </Text>
                )}

                {/* Rating View */}
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 8 }}>
                  {[...Array(5)].map((_, starIndex) => (
                    <TouchableOpacity key={starIndex} onPress={() => handleStarPress(item.id, starIndex)}>
                      <Ionicons
                        name={starIndex < item.rating ? 'star' : 'star-outline'}
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
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default BrowsAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:12
  },
  imageContainer: {
    width: width * 0.8, // Adjust the width as needed
    height: 280, // Adjust the height as needed
    marginRight: 10, // Space between images
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10, // Optional: to add rounded corners
    marginBottom: 20,
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
    marginLeft: 150,
  },
  filterSection: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 15,
    textAlign: 'center',
    marginTop: 20,
  },
});
