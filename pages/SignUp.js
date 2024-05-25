import { Link } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/images/logo.png';


const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');

  const handleSubmit = async () => {
    console.log(email, password,conformPassword);
  }

  return (
    <View style={styles.container}>
      <View>
         <Image source={logo} style={styles.image} />
      </View>
      <Text style={styles.title}>Sign Up</Text>
       <View style={styles.form}>
       <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Conform Password"
        value={conformPassword}
        onChangeText={(value) => setConformPassword(value)}
        secureTextEntry
        autoCapitalize="none"
      />

       </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>


      <Text>If you haven't account ? <Link to="/SignUp" style={styles.signUp}>Sign Up</Link></Text>

      {/* title="Back to SignUp" 
      onPress={()=>navigation.navigate('SignUp')} /> */}
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#Fe001a',
    padding: 20,
    paddingTop: 200,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  form: {
    marginBottom:20,
    width:'100%'
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 0,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: '100%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    // shadowRadius: 2,
    elevation: 5, // For Android shadow
    backgroundColor:'#fff',
  },
  button: {
    backgroundColor: '#194553', // Primary color
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // For Android shadow
    width:150,
    marginBottom:20,
    
  },
  buttonText: {
    color:'#fff', // White text
    fontSize: 20,
    fontWeight: '600',

  },
  signUp:{
    textDecorationLine:"underline",
  },
  image:{
    width:300,
    height:100,
    marginBottom:20,
    borderRadius:50,
  }
})