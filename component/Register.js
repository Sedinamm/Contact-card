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
import ImagePickerExample from "./ImagePicker";

export default function Register({navigation}) {
  return (
    <View style={{ flex: 5, marginTop: 35, justifyContent: "center" }}>
      {/* button */}
      <View
        style={{
          flex: 0.4,
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
            Register
          </Text>
        </View>
      </View>

      {/* Image/ Icon */}
      <View style={{ flex: 1, backgroundColor: "#eee", justifyContent:"center" }}>
     <ImagePickerExample/>
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
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Full Name</Text>
            <TextInput placeholder="Gabriel Sedinam" style={{}} />
          </View>
          <View
            style={{ height: 1, backgroundColor: "#bbb", marginHorizontal: 20 }}
          ></View>
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
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Phone Number
            </Text>
            <TextInput placeholder="+233 (244) 76483" style={{}} />
          </View>
          <View
            style={{ height: 1, backgroundColor: "#bbb", marginHorizontal: 20 }}
          ></View>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Role</Text>
            <TextInput placeholder="CEO" style={{}} />
          </View>
          <View
            style={{ height: 1, backgroundColor: "#bbb", marginHorizontal: 20 }}
          ></View>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Twitter</Text>
            <TextInput placeholder="@Sedinamm" style={{}} />
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
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Linkedin</Text>
            <TextInput placeholder="/Sedinamm" />
          </View>
          <View
            style={{ height: 1, backgroundColor: "#bbb", marginHorizontal: 20 }}
          ></View>
        </View>

        {/* Button */}
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Home')
        }}>
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
              REGISTER
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
