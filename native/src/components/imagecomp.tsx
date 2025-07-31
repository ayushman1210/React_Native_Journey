import { View, Text ,Image} from 'react-native'
import React from 'react'

const Imagecomp = () => {
  return (
    <View>
      <Text>Images</Text>
    <Image source={require("../assets/WIN_20250127_20_43_14_Pro.jpg")} style={{width:200, height:100}}/>
    </View>
  )
}

export default Imagecomp