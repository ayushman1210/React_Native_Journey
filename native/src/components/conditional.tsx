import { View, Text } from 'react-native'
import React from 'react'

const ValidPass=()=><Text>Valid password</Text>
const Invalidpass=()=><Text>Invalid password</Text>

interface roof{
    isvalid:boolean
}

const Password=({isvalid}:roof)=>{
if(isvalid){
    return <ValidPass/>
}

return <Invalidpass/>
}

const Conditional = () => {
    const items=["milk", "eggs","rice","flour"]
  return (
    <View>
      <Text>Conditional</Text>
      <Password isvalid={true}/>
    {items.length>0 && <Text>you have total {items.length} in your cart </Text>}

    </View>
  )
}

export default Conditional