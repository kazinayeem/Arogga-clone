import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInRight, FadeOutDown } from "react-native-reanimated";
export default function Slider() {
  useEffect(() => {
    StatusBar.setBackgroundColor("white");
    StatusBar.setNetworkActivityIndicatorVisible;
  }, []);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const onBoardingData = [
    {
      id: 1,
      title: "Consult only with a doctor you trust f dadasdad",
      image: require("@/assets/images/slider1.png"),
    },
    {
      id: 2,
      title: "Explore the features Explore the features",
      image: require("@/assets/images/slider2.png"),
    },
    {
      id: 3,
      title: "Get started Explore the features dddd",
      image: require("@/assets/images/slider3.png"),
    },
  ];

  const handleNext = () => {
    if (currentIndex < onBoardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  

  const handleSkip = () => {
    router.navigate("/(onboarding)/AuthScreen")
  };

  return (
    <View className="flex-1 bg-white items-center justify-between p-6">
      {/* Skip Button */}
      <TouchableOpacity onPress={handleSkip} className="self-end">
        <Text className="text-gray-300 text-lg">Skip</Text>
      </TouchableOpacity>

      {/* Image */}
      <Animated.Image
        key={currentIndex}
        entering={FadeInRight}
        exiting={FadeOutDown}
        source={onBoardingData[currentIndex].image}
        
      />

      {/* Text Content */}
      <View className="bg-gray-100 self-end  flex-1 rounded-3xl p-3 items-center flex justify-center">
        <View className="w-full items-center mb-8">
          <Animated.Text
            key={currentIndex}
            entering={FadeInRight}
            exiting={FadeOutDown}
            className="text-xl font-semibold text-start text-gray-800"
          >
            {onBoardingData[currentIndex].title}
          </Animated.Text>
        </View>

        {/* Pagination & Next Button */}
        <View className="flex-row items-center justify-between w-full px-6">
          {/* Pagination Dots */}
          <View className="flex-row space-x-2">
            {onBoardingData.map((_, index) => (
              <TouchableOpacity
                onPress={() => {
                  setCurrentIndex(index);
                }}
                key={index}
                className={`w-6 h-2 rounded-full m-1 ${
                  index === currentIndex ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </View>

          {/* Next Button */}
          <TouchableOpacity
            onPress={handleNext}
            className="bg-green-600 w-14 h-14 rounded-full items-center justify-center"
          >
            <Text className="text-white text-5xl">→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
