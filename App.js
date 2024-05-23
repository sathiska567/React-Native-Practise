import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from './components/header'
import ToDoItem from './components/todoitem'

const App = () => {
  const [todos, setTodos] = useState([

    { key: 1, title: 'Buy coffee' },
    { key: 2, title: 'create an app' },
    { key: 3, title: 'play on the switch' },

  ])

  const pressHandler = (key) => {
     setTodos((prevTodos)=>{
       return prevTodos.filter(todos => todos.key!= key)
     })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ToDoItem item={item} pressHandler={pressHandler}/>
            )}

          />

        </View>
      </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list:{
    marginTop:20,
  }
})