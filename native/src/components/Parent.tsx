import { View, Text } from 'react-native'
import React from 'react'
import Child from './child'

const Parent = () => {
  return (
    <View>
      <Text>Parent</Text>
      <Child name="ayushman"  age={18} location="gonda"/>
    </View>
  )
}

export default Parent