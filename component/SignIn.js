import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Register from "./Register";

export default function SignIn({navigation}) {
  return (
    <View style={{ flex: 5, marginTop: 35, justifyContent: "center" }}>
      {/* Image*/}
      <View style={{ flex: 2, backgroundColor: "#eee" }}>
        <Image
          style={{ height: 450, width: 380 }}
          source={require("../Images/1.jpg")}
        />
      </View>

      {/* Text */}
      <View
        style={{ flex: 0.6, backgroundColor: "#eee", paddingHorizontal: 10 }}
      >
        <Text style={{ fontSize: 20, top: 10 }}>
          KEEP IN TOUCH WITH THE PEOPLE OF AMAZON
        </Text>
        <Text style={{ top: 20 }}>
          Sign in or register with your amazon email
        </Text>
      </View>

      {/* Register and Sign in */}
      <View
        style={{
          flex: 0.9,
          backgroundColor: "#eee",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems:"center",
          paddingHorizontal:20
          
          
        }}
      >
        {/* Register */}
        <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
          <View>
            <Text style={{fontSize:20}}>REGISTER</Text>
            <View style={{backgroundColor:"red", height:2, width: 100, top:4, }}></View>
          </View>
        </TouchableOpacity>

        {/* Sign in */}
        <TouchableOpacity  onPress={()=>navigation.navigate("Home")}>
        <View>
          <Text style={{fontSize:20}}>SIGN IN</Text>
          <View style={{backgroundColor:"red", height:2, width: 100, top:4 }}></View>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
