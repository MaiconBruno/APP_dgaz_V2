import { Text, View } from "react-native";;
import { Button } from "../components/button";

export default function Login(){
    return(
        <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
            <Text>
                Login
            </Text>    
        <Button src={'/recovery'} name={'GO Recovery'}/>
        </View>
    )
}