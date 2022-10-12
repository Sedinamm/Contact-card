import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function GetStarted({navigation}) {
  return (
    <View style={{ flex: 1, marginTop: 35, justifyContent: "center" }}>
      {/* Logo */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#eee",
          justifyContent: "flex-end",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ height: 90, width: 260, marginHorizontal: 10, top:40}}
          source={require("../Images/loogo.png")}
        />
      </View>

      {/* Text */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#eee",
          justifyContent: "flex-end",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ fontSize: 20, marginHorizontal: 10, textAlign: "center", }}
        >
          AMAZON CONTACTS
        </Text>
      </View>

      {/* Get Started */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#eee",
          justifyContent: "center",
          justifyContent: "flex end",
          justifyContent: "center"
        }}
      >
        <TouchableOpacity onPress={()=> navigation.navigate("SignIn")}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>GET STARTED</Text>
        <View style={{backgroundColor:"red", height:2, width: 110, left: 150, top:4 }}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
