import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';


const UserDetails = () => {
        const route = useRoute();

        // Access route params
        console.log(route.params);

  return (
    <View>
      <Text>UserDetails</Text>
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({})