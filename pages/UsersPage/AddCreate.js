import React, { useState } from 'react'
import { TextInput, Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
// import { launchImageLibrary } from '@react-native-image-picker/image-picker';
import * as ImagePicker from 'expo-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import values from './../../node_modules/lodash-es/values';
import axios from 'axios';


const AddCreate = () => {
  const [imageUri, setImageUri] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      // const source = { uri: result.assets[0] };
      // setImage(result.assets[0]);
      // const 
      // const data = await cloudinary.uploader.upload(result.assets[0].uri);
      // console.log('Uploaded image URL:', data);
      
      setImageUri(result.assets[0].uri)
    } else {
      alert('You did not select any image.');
    }
  };

  const handleSubmit = async() => {

    // console.log(imageUri);

    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
    })

    console.log(formData);

    // formData.append('userName', userName);
    // formData.append('email', email);
    // formData.append('number', number);
    // formData.append('location', location);
    // formData.append('description', description);

    try {
      // console.log(formData);
      const response = await axios.post("http://localhost:3000/add-create-details/post-details",formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>Place Name : </Text>
          <TextInput
            onChangeText={(value) => setUserName(value)}
            style={styles.input}
            placeholder="Enter Your Place Name"
          />

        </View>

        <View>
          <Text style={styles.label}>Place Email : </Text>
          <TextInput
            onChangeText={(value) => setEmail(value)}
            style={styles.input}
            placeholder="Enter Your Place Email"
            keyboardType='email-address'
          />
        </View>

        <View>
          <Text style={styles.label}>Contact Number :</Text>
          <TextInput
            onChangeText={(value) => setNumber(value)}
            style={styles.input}
            placeholder="Enter Your Contact Number"
            keyboardType="numeric"
          />
        </View>

        <View>
          <Text style={styles.label}>Enter Location :</Text>
          <TextInput            
            onChangeText={(value) => setLocation(value)}
            style={styles.input}
            placeholder="Enter Your Location"
          />
        </View>

        <View>
          <Text style={styles.label}>Decription :</Text>
          <TextInput
            onChangeText={(value) => setDescription(value)}
            style={styles.input}
            placeholder="Enter your Description"
            multiline={true}
            numberOfLines={4}
          />
        </View>

        <View style={styles.imagePickerSection}>
          <TouchableOpacity style={styles.customButton} onPress={pickImageAsync}>
            <Text style={styles.buttonText}>Select Image</Text>
          </TouchableOpacity>
        </View>

        <Image source={{ uri: imageUri }} style={{ width:20, height: 20}}  />

        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.submitButton}>Submit</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default AddCreate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 8,
    borderRadius: 4,
  },
  formContainer: {
    margin: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 12,
  },
  // imagePickerSection:{
  //   backgroundColor:'#000',
  //   margin:10,
  // },
  customButton: {
    backgroundColor: 'transparent',
    padding: 6,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: "28%",
    margin: 10,
    marginBottom: 30
  },
  buttonText: {
    color: '#000',
    textAlign: 'left',
  },
  submitButton: {
    backgroundColor: '#006400',
    padding: 8,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 0,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
  }
})