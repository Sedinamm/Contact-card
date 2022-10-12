import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Login({navigation}) {
  return (
    <View style={{ flex: 5, marginTop: 35, justifyContent: "center" }}>
      {/* button */}
      <View
        style={{
          flex: 0.5,
          backgroundColor: "red",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Ionicons
              style={{ paddingHorizontal: 20 }}
              name="arrow-back"
              size={35}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, color: "white", right: 20 }}>
            Sign In
          </Text>
        </View>
      </View>

      {/* Image */}
      <View style={{ flex: 2, backgroundColor: "#eee" }}>
        <Image
          style={{ height: 250, width: 380 }}
          source={require("../Images/1.jpg")}
        />
      </View>

      {/* Email, Password, button and forgot password */}
      <View style={{ flex: 3, backgroundColor: "#eee" }}>
        {/* Email and password */}
        <View>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Email</Text>
            <TextInput placeholder="johnsmith@mail.com" style={{}} />
          </View>
          <View
            style={{ height: 1, backgroundColor: "#bbb", marginHorizontal: 20 }}
          ></View>
        </View>
        <View>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Password</Text>
            <TextInput placeholder="••••••" />
          </View>
          <View
            style={{ height: 1, backgroundColor: "#bbb", marginHorizontal: 20 }}
          ></View>
        </View>

        {/* Button */}
        <TouchableOpacity>
          <View
            style={{
              height: 55,
              width: 280,
              backgroundColor: "red",
              justifyContent: "center",
              alignSelf: "center",
              top: 50,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 16,
              }}
            >
              SIGN IN
            </Text>
          </View>
        </TouchableOpacity>

        {/* Forgot password */}
        <View style={{marginHorizontal:20, marginVertical: 100,flexDirection: "row"}}>
            <View>
            <Text>
                Forgot?
            </Text>
            </View>
            <View style={{marginHorizontal:10}}>
                <TouchableOpacity>
                <Text>
                    Reset Password
                </Text>
                <View style={{height:1, width: 100, backgroundColor:"red"}}></View>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
}
