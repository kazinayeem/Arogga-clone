import Category from "@/components/Category";
import SearchBar from "@/components/SearchBar";
import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Find your desire</Text>
          <Text style={styles.title}>health solution</Text>
        </View>
        <Ionicons name="notifications" size={28} color="black" />
      </View>

      {/* Search Bar */}
      <SearchBar />

      {/* Categories */}
      <Category />

      {/* Promo Section */}
      <View style={styles.promoContainer}>
        <View style={styles.promoTextContainer}>
          <Text style={styles.promoTitle}>
            Early protection for your family health
          </Text>
          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("@/assets/images/slider1.png")}
          style={styles.promoImage}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
  },

  promoContainer: {
    flexDirection: "row",
    backgroundColor: "#E8F3F1",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  promoTextContainer: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
  },
  promoButton: {
    backgroundColor: "#199A8E",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  promoButtonText: {
    color: "white",
    fontSize: 14,
  },
  promoImage: {
    width: 100,
    height: 100,
  },
});
