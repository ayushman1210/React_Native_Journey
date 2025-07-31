import { View, Text,FlatList } from 'react-native'
import React from 'react'

const Arraydata = () => {

    const ArrayofObject=[
        {
            id:1,
            name:"ayush"
        },
        {
            id:2,
            name:"shubham"
        },
        {
            id:3,
            name:"samriddh"
        }
    ]
  return (
    <View>
      <Text>Arraydata</Text>
    <FlatList keyExtractor={item=>item.id.toString()} data={ArrayofObject} renderItem={({item})=><Text>{item.name}</Text>} />
    </View>
  )
}

export default Arraydata