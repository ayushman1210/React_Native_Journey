import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
  return (
    <View>
      <Text>Child</Text>
      <Text>{props.name}</Text>       
      <Text>{props.age}</Text>
    </View>
  )
}

export default Child