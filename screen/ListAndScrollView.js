import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [people , setPeople] = useState([
     {name:"sahan" , key:'1'},
     {name:"lugi" , key:'2'},
     {name:"peach" , key:'3'},
     {name:"toad" , key:'4'},
     {name:"bowser" , key:'5'},
     {name:"bowser" , key:'6'},
     {name:"bowser" , key:'7'},
     {name:"bowser" , key:'8'},
     {name:"bowser" , key:'9'},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map((item)=>(
         <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
         </View>
      ))}
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: '#fff',
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
},

item:{
  // marginTop: 20,
  padding: 30,
  backgroundColor: 'pink',
  marginTop: 20,
  fontSize:24
}
})