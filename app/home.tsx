import { supabase } from "@/services/supabase";
import { CoffeeShop } from "@/type";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const [shops, setShops] = useState<CoffeeShop[]>([]);
  useEffect(() => {
    const fetchCoffeeShops = async () => {
      const { data, error } = await supabase
        .from("coffee_shops")
        .select("*")
        .order("name", { ascending: true });

      if (error) {
      } else {
        setShops(data);
      }
    };
    fetchCoffeeShops();
  }, []);

  const renderShopItem = ({ item }: { item: CoffeeShop }) => (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() =>
        router.push({
          pathname: "/detail",
          params: {
            id: item.id,
            name: item.name,
            district: item.district,
            description: item.description,
            latitude: item.latitude,
            longitude: item.longitude,
            phone: item.phone,
            image_url: item.image_url,
          },
        })
      }
    >
      <Image
        source={{ uri: item.image_url }}
        style={{ height: 75, width: 75, borderRadius: 5 }}
      />
      <View>
        <Text style={styles.shopName}>{item.name}</Text>
        <Text style={styles.shopdistrict}>{item.district}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={renderShopItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },

  shopName: {
    fontFamily: "Kanit_700Bold",
    fontSize: 18,
  },
  shopdistrict: {
    fontFamily: "Kanit_400Regular",
    fontSize: 18,
    color: "#ABABAB",
  },
});
