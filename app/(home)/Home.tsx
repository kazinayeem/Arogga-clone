import EvilIcons from "@expo/vector-icons/EvilIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function Home() {
  const [search, setSearch] = useState("");
  const categories = [
    {
      id: 1,
      name: "Doctor",
      image: <Fontisto name="doctor" size={24} color="#199A8E" />,
    },
    {
      id: 2,
      name: "Pharmacy",
      image: <Fontisto name="shopping-store" size={24} color="#199A8E" />,
    },
    {
      id: 3,
      name: "Hospital",
      image: <Fontisto name="hospital" size={24} color="#199A8E" />,
    },
    {
      id: 4,
      name: "Laboratory",
      image: <Fontisto name="blood-test" size={24} color="#199A8E" />,
    },
    {
      id: 5,
      name: "Ambulance",
      image: <Fontisto name="ambulance" size={24} color="#199A8E" />,
    },
  ];
  return (
    <ScrollView className="flex-1  p-4 bg-white">
      {/* header */}
      <View className="flex-row items-center justify-between mb-4 ">
        <View className="flex-col items-start">
          <Text
            className="text-2xl font-light text-black"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            Find your desire
          </Text>
          <Text
            className="text-2xl font-light text-black"
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            healt solution
          </Text>
        </View>
        <Ionicons name="notifications" size={24} color="black" />
      </View>

      {/* search part */}

      <View className="flex-row items-center justify-between mb-4 bg-gray-100 rounded-full px-3 py-2 mt-5">
        <EvilIcons name="search" size={23} color="black" />
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          className=" text-start rounded-full px-3 py-1 w-full"
          placeholder="Search for health solution"
          style={{ fontFamily: "Poppins_400Regular" }}
        />
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row  flex h-20 w-25 items-center p-3 bg-gray-100 rounded-lg m-1">
            <View className="flex-col flex justify-center items-center ">
              <View className="bg-white">{item.image}</View>
              <Text className="text-gray-900 mt-2 font-extralight">
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* slider */}
      <View className="flex-row justify-between w-full flex flex-1 bg-[#E8F3F1] rounded-lg">
        <View className="flex-col w-[75%] justify-center items-start rounded-lg p-4">
          <Text className="text-2xl font-bold text-black">
            Early protection for your family health
          </Text>
          <TouchableOpacity className="flex flex-row items-center justify-center mt-2 bg-[#199A8E] rounded-full p-3">
            <Text className="text-gray-900 font-extralight">Learn More</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-col w-[25%] justify-start items-center rounded-full">
          <Image
            className="w-full h-full "
            alt="slider"
            resizeMode="contain"
            resizeMethod="resize"
            source={require("@/assets/images/slider1.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
