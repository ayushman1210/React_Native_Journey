import {Text, View,Button, Pressable} from "react-native"

function Buttoncompo(){
    return <View>
        <Text>explore the app </Text>
        <Button title="click now" color="red" onPress={()=>console.log("pressed")}/>

            <Pressable onPress={()=>console.log("oressed ")}>
                <Text style={{color:"pink"}}>Press me </Text>
            </Pressable>

             <Pressable onPressIn={()=>console.log("oressed ")}>
                <Text style={{color:"magenta"}}>Press me </Text>
            </Pressable>

              <Pressable onPressOut={()=>console.log("oressed ")}>
                <Text style={{color:"red"}}>Press me </Text>
            </Pressable>

              <Pressable onLongPress={()=>console.log("oressed ")}>
                <Text style={{color:"green"}}>Press me </Text>
            </Pressable>
    </View>
}

export default Buttoncompo;