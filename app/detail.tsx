import * as Linking from "expo-linking";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Detail() {
  const params = useLocalSearchParams();
  const handleCallApp = () => {
    const phoneNumber = params.phone as string;
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url);
  };

  const handleOpenMapApp = () => {
    const googleMap = `https://www.google.com/maps/search/?api=1&query=${params.latitude},${params.longitude}`;

    const appleMap = `http://maps.apple.com/?ll=${params.latitude},${params.longitude}`;

    Linking.canOpenURL(googleMap).then((supported) => {
      if (supported) {
        Linking.openURL(googleMap);
      } else {
        Linking.openURL(appleMap);
      }
    });
  };
  return (
    <ScrollView>
      <Image source={{ uri: params.image_url as string }} style={styles.img} />

      {/* แสดงรายละเอียด */}
      <View style={styles.display}>
        <Text style={styles.shopname}>{params.name as string}</Text>
        <Text style={styles.district}>{params.district as string}</Text>
        <Text style={{ fontFamily: "Kanit_400Regular", fontSize: 16 }}>
          {params.description as string}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleCallApp}>
          <Text style={styles.phone}>☎{params.phone as string}</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: "Kanit_400Regular", fontSize: 16 }}>
          แผนที่ร้าน
        </Text>
        <MapView
          style={{ width: "100%", height: 300 }}
          initialRegion={{
            latitude: parseFloat(params.latitude as string),
            longitude: parseFloat(params.longitude as string),
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: parseFloat(params.latitude as string),
              longitude: parseFloat(params.longitude as string),
            }}
            title={params.name as string}
            description={params.description as string}
            onPress={handleOpenMapApp}
          />
        </MapView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: { width: "100%", height: 200 },

  display: { padding: 18, gap: 10 },

  shopname: {
    fontFamily: "Kanit_700Bold",
    fontSize: 20,
    fontWeight: "bold",
  },

  district: {
    fontFamily: "Kanit_400Regular",
    fontSize: 20,
    color: "#ABABAB",
  },
  button: {
    marginTop: 10,
    paddingVertical: 15,
    backgroundColor: "#00f70c",
    borderRadius: 10,
    alignItems: "center",
  },
  phone: {
    color: "white",
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
  },
});
