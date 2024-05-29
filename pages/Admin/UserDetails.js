import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';


const UserDetails = () => {
  const route = useRoute();
  
  // Access route params
  console.log(route.params);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="user_id"
        value={route.params.userData._id}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={route.params.userData.email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="isAdmin"
        value={route.params.userData.isAdmin}
      />
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  input:{
    backgroundColor:"#fff",
    marginBottom:10,
    padding:20,
    borderRadius:10
  }
})