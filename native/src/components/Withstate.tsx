import { View, Text ,Button} from 'react-native'
import React, { useState } from 'react'

const Withstate = () => {
    const [count,setcount]=useState(0);
    function handle(){
        setcount(count+1);
    }
  return (
    <View style={{padding:20, margin:20, alignItems:'center'}}>
      <Text style={{color:"black"}}>count:{count}</Text>
      <Button title="click me" onPress={handle}/>
    </View>
  )
}

export default Withstate