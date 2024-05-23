import { StyleSheet, Text, View , ScrollView, FlatList,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const App = () => {
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

  const handlePress = (id)=>{
    alert(id)
    setPeople((prevPeople)=>{
      return prevPeople.filter(person=>person.id !== id)
    })
  }

  return (
    <View style={styles.container}>

      {/* only list loading when scrolling */}
         <FlatList 
          //  numColumns={2}
           keyExtractor={(item)=>item.id}
           data={people}
           renderItem={({item})=>(
            <TouchableOpacity onPress={()=>handlePress(item.id)}>
                  <Text style={styles.item}>{item.name}</Text>

            </TouchableOpacity>
           )}
         
         />
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
  fontSize:24,
  marginHorizontal:10,
  marginTop:24
}
})