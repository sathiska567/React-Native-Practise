import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import image from "../../assets/images/01.png"
import image1 from "../../assets/images/02.png"
import penImage from "../../assets/images/03.png"
import { TouchableOpacity } from 'react-native-gesture-handler'

const Profile = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Image source={image} style={styles.imageStyle} />
        <Text style={styles.text}>Profile Section</Text>
        <Image source={image1} style={styles.image_1_Style} />

      </View>
      <View style={styles.description}>        
        <Text style={styles.descriptionText}>
        Sri Lanka is a diverse travel destination featuring beautiful beaches, ancient ruins, rich culture, and lush landscapes. Highlights include scenic train rides through tea plantations and thrilling wildlife safaris in national parks, offering a unique and unforgettable experience for all visitors.
          </Text>
      </View>

      <View>
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
          <Text style={styles.label}>Contact Number :</Text>
          <TextInput
            onChangeText={(value) => setNumber(value)}
            style={styles.input}
            placeholder="Enter Your Contact Number"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.submitButton}>Submit</Text>
        </TouchableOpacity>

      </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6EAF2",
    height: "100vh",
  },
  appBar: {
    backgroundColor: '#000f89',
    height: "28vh",
    // borderBottomLeftRadius:100,
    // borderBottomRightRadius:100
    position: "absolute"
  },
  imageStyle: {
    marginLeft: 160
  },
  image_1_Style: {
    top: -170
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    top: -30
  },
  description: {
    backgroundColor: "#FFF",
    height: "18vh",
    position: "relative",
    top: "22vh",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 25,
    padding:25
  },
  descriptionText: {
    textAlign: "center",
    fontWeight:"600",
    color:"grey"
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
    top:200,
    margin:"30px"
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
    marginVertical: 20,
    borderWidth: 0,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
    margin: 10,
  }
})