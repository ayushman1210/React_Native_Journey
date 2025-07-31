import { View, Text } from 'react-native'
import React from 'react'

const Dynamic = () => {

    const name="ayushman";
    const multiply=(a:number,b:number )=>a*b;



  return (
    <View>
      <Text>Dynamic</Text>
      <Text>{name}</Text>
      <Text>{multiply(2,3)}</Text>
    </View>
  )
}

export default Dynamic