import { View, Text ,Image,Button} from 'react-native'
import React from 'react'

const Page = () => {
    const price="$200000";
  return (
    <View>
      <Text style={{color:"black" }}>{price}</Text>
            <Image source={require("../assets/WIN_20250127_20_43_14_Pro.jpg")} style={{width:200, height:200}}/>
      <Text>Ayushman & Bhaiya </Text>
    <Text>here is the demo</Text>
      <Button onPress={()=>alert("added to cart ")} title="added to cart"/>
    </View>
  )
}

export default Page