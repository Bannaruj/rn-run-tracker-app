import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Add() {
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [timeofDay, setTimeofDay] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("กรุณาอนุญาตเข้าถึงกล้องก่อนใช้งาน");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setBase64Image(result.assets[0].base64 || null);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        <Text style={styles.titleShow}>สถานที่วิ่ง</Text>
        <TextInput
          placeholder="เช่น สวนลุมพินี"
          style={styles.inputValue}
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.titleShow}>ระยะทาง (กิโลเมตร)</Text>
        <TextInput
          placeholder="เช่น 5.2"
          style={styles.inputValue}
          value={distance}
          onChangeText={setDistance}
          keyboardType="decimal-pad"
        />

        <Text style={styles.titleShow}>ช่วงเวลา</Text>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <TouchableOpacity
            onPress={() => setTimeofDay("เช้า")}
            style={[
              styles.todBtn,
              {
                backgroundColor: timeofDay === "เช้า" ? "#f7501e" : "#d3d3d3",
              },
            ]}
          >
            <Text style={styles.timeText}>เช้า</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setTimeofDay("เย็น")}
            style={[
              styles.todBtn,
              {
                backgroundColor: timeofDay === "เย็น" ? "#f7501e" : "#d3d3d3",
              },
            ]}
          >
            <Text style={styles.timeText}>เย็น</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titleShow}>รูปภาพสถานที่</Text>

        <TouchableOpacity style={styles.takePhotoBtn} onPress={handleTakePhoto}>
          <Ionicons name="camera" size={30} color="#b6b6b6" />
          <Text style={styles.photoText}>กดเพื่อถ่ายภาพ</Text>
        </TouchableOpacity>

        {image && <Image source={{ uri: image }} style={styles.previewImage} />}

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>บันทึกข้อมูล</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  saveBtn: {
    padding: 15,
    backgroundColor: "#f84848",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveText: {
    fontFamily: "Kanit_700Bold",
    color: "#fff",
  },
  titleShow: {
    fontFamily: "Kanit_700Bold",
    marginBottom: 10,
  },
  inputValue: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontFamily: "Kanit_400Regular",
    backgroundColor: "#EFEFEF",
  },
  takePhotoBtn: {
    width: "100%",
    height: 200,
    backgroundColor: "#e6e6e6",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  photoText: {
    fontFamily: "Kanit_400Regular",
    color: "#b6b6b6",
    marginTop: 8,
  },
  previewImage: {
    width: "100%",
    height: 200,
    marginTop: 15,
    borderRadius: 8,
  },
  todBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  timeText: {
    fontFamily: "Kanit_400Regular",
    color: "#fff",
  },
});
