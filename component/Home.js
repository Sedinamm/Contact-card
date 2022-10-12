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
import { QRCode } from "react-native-custom-qr-codes-expo";
import Ionicons from "react-native-vector-icons/Ionicons";
// import { QRCode } from "react-native-custom-qr-codes-expo";

export default function Home({ navigation }) {
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              style={{ paddingHorizontal: 320 }}
              name="person-outline"
              size={35}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={{ height: 35, width: 100, right: 40, top: 10 }}
            source={require("../Images/loogo.png")}
          />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: "#eee", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", top: 40 }}>
          Exchange Contact Information
        </Text>
        <Text style={{ top: 50 }}>
          Scan this QR code to share your contacts
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          backgroundColor: "#eee",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <QRCode />
      </View>

      <View
        style={{ flex: 0.5, backgroundColor: "#eee", justifyContent: "center" }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            marginHorizontal: 20,
            top: 10,
          }}
          source={require("../Images/1.jpg")}
        />
        <Text
          style={{
            marginHorizontal: 90,
            bottom: 45,
            fontWeight: "bold",
            top: -35,
          }}
        >
          Gabriel Sedinam
        </Text>
        <Text
          style={{ marginHorizontal: 90, bottom: 45, color: "gray", top: -30 }}
        >
          Head of Marketing
        </Text>
      </View>

      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ marginHorizontal: 20, fontWeight: "bold" }}>
          Want to add a new connection?
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate("QrScanner")}
          style={{
            borderColor: "red",
            borderWidth: 1,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 17, color: "red" }}>
            Scan QR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
