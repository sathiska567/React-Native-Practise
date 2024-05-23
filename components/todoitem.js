import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const ToDoItem = ({item ,pressHandler}) => {
  return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <Text style={styles.item}>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default ToDoItem

const styles = StyleSheet.create({
   item:{
        padding:16,
        margin:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
   }
})