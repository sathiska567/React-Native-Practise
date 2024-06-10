import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, FlatList, Image, StyleSheet, Dimensions, Text, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const imageData = [
  { id: 1, image: require('../../assets/images/daladamaligawa.png'), title: 'Dalada Maligawa', rating: 4 },
  { id: 2, image: require('../../assets/images/galleFort.png'), title: 'Galle Fort', rating: 5 },
  { id: 3, image: require('../../assets/images/NineArch.png'), title: 'Nine Arch Bridge', rating: 3 },
  { id: 4, image: require('../../assets/images/seegiriya.png'), title: 'Sigiriya', rating: 4 },
];

const BrowsAdd = () => {
  const [postDetails, setPostDetails] = useState([]);
  const [ratings, setRatings] = useState(imageData);
  const [searchValue, setSearchValue] = useState('');

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

  const handleSearch = async () => {
    try {
      const filterResponse = await axios.post("http://localhost:3000/brows-class/filter-data", { data: searchValue });
      console.log(filterResponse);
      setPostDetails(filterResponse.data.data);
    } catch (error) {
      console.log(error);
      showAlert("Error", "An error occurred while fetching data. Please try again later.");
    }
  };

  useEffect(() => {
    getAllDetails();
  }, []);

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterSection}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={text => setSearchValue(text)}
          value={searchValue}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <FlatList
        data={postDetails}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={ratings[index % ratings.length].image} style={styles.image} />
              {postDetails[index] && (
                <Text key={postDetails[index]._id} style={styles.title}>
                  {postDetails[index].location}
                </Text>
              )}
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 8 }}>
                {[...Array(5)].map((_, starIndex) => (
                  <TouchableOpacity key={starIndex} onPress={() => handleStarPress(ratings[index % ratings.length].id, starIndex)}>
                    <Ionicons
                      name={starIndex < ratings[index % ratings.length].rating ? 'star' : 'star-outline'}
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
    </View>
  );
};

export default BrowsAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12
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
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
});
