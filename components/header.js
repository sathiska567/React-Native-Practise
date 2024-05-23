import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My ToDos</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
        header:{
           height:100,
           paddingTop:38,
           backgroundColor:'coral'
        },
        title:{
           fontSize:25,
           color:'white',
           textAlign:'center',
           fontWeight:'bold'
        }
})