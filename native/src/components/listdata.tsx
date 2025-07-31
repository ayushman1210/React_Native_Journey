import { View, Text ,FlatList} from 'react-native'
import React from 'react'

const Listdata = () => {
    const fruits=["apple", "bananam ","grampes "]
  return (
    <View>
      <Text>Listdata</Text>
      <FlatList data={fruits} keyExtractor={(item)=>item} renderItem={({item})=><Text>{item}</Text>}/>
    </View>
  )
}

export default Listdata