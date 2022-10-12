import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
     <View style={{flex: 9}}>
     <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
     </View>
     <View style={{flex:1}}>
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
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
