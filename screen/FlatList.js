import { StyleSheet, Text, View , ScrollView, FlatList} from 'react-native'
import React, { useState } from 'react'

const FlatScreen = () => {
  const [people , setPeople] = useState([
     {name:"sahan" , id:'1'},
     {name:"lugi" , id:'2'},
     {name:"peach" , id:'3'},
     {name:"toad" , id:'4'},
     {name:"bowser" , id:'5'},
     {name:"bowser" , id:'6'},
     {name:"bowser" , id:'7'},
     {name:"bowser" , id:'8'},
     {name:"bowser" , id:'9'},
  ]);

  return (
    <View style={styles.container}>

      {/* only list loading when scrolling */}
         {/* <FlatList 
           numColumns={2}
           keyExtractor={(item)=>item.id}
           data={people}
           renderItem={({item})=>(
             <Text style={styles.item}>{item.name}</Text>
           )}
         
         /> */}

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

export default FlatScreen

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
  fontSize:24,
  marginHorizontal:10,
  marginTop:24
}
})