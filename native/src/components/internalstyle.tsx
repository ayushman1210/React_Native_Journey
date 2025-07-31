import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

const Internalstyle = () => {
  return (
    <View>
      <Text style={styles.textstyle}>Internalstyle</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    textstyle:{
        color:"green",
        fontSize:20,
        margin:20,
        padding:10,
        backgroundColor:"black"
    }
})

export default Internalstyle