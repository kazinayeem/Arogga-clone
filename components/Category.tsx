import Fontisto from "@expo/vector-icons/Fontisto";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Category() {
  const categories: {
    id: number;
    name: string;
    icon: "doctor" | "shopping-store" | "hospital" | "blood-test" | "ambulance";
  }[] = [
    { id: 1, name: "Doctor", icon: "doctor" },
    { id: 2, name: "Pharmacy", icon: "shopping-store" },
    { id: 3, name: "Hospital", icon: "hospital" },
    { id: 4, name: "Laboratory", icon: "blood-test" },
    { id: 5, name: "Ambulance", icon: "ambulance" },
  ];
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryList}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.categoryItem}>
          <View style={styles.categoryIcon}>
            <Fontisto name={item.icon} size={24} color="#199A8E" />
          </View>
          <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  categoryList: {
    paddingBottom: 10,
  },
  categoryItem: {
    backgroundColor: "#F3F4F6",
    padding: 5,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    width: 95,
  },
  categoryIcon: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    marginBottom: 8,
  },
  categoryText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
});
