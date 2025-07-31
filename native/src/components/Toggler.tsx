import { View, Text ,Button} from 'react-native'
import React, { useState } from 'react'

const Toggler = () => {
    const [text,settext]=useState("on/off");
    const [turn, setturn]=useState(true);
    function handle(){
      if(turn) setturn(false);
      else setturn(true)

       if(turn){settext("on")}
       else{settext("off")}
    }
  return (
    <View>
      <Text>Toggler</Text>
      <Text>{text}</Text>
      <Button title="toggle" onPress={handle}/>
    </View>
  )
}

export default Toggler