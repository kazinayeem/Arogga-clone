import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInRight, FadeOutDown } from "react-native-reanimated";

export default function Slider() {
  useEffect(() => {
    StatusBar.setBackgroundColor("white");
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
      router.replace("/(onboarding)/AuthScreen");
    }
  };

  const handleSkip = () => {
    router.navigate("/(onboarding)/AuthScreen");
  };

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Image */}
      <Animated.Image
        key={currentIndex}
        entering={FadeInRight}
        exiting={FadeOutDown}
        source={onBoardingData[currentIndex].image}
      />

      {/* Text Content */}
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Animated.Text
            key={currentIndex}
            entering={FadeInRight}
            exiting={FadeOutDown}
            style={styles.titleText}
          >
            {onBoardingData[currentIndex].title}
          </Animated.Text>
        </View>

        {/* Pagination & Next Button */}
        <View style={styles.paginationContainer}>
          {/* Pagination Dots */}
          <View style={styles.dotContainer}>
            {onBoardingData.map((_, index) => (
              <TouchableOpacity
                onPress={() => setCurrentIndex(index)}
                key={index}
                style={[
                  styles.dot,
                  index === currentIndex
                    ? styles.activeDot
                    : styles.inactiveDot,
                ]}
              />
            ))}
          </View>

          {/* Next Button */}
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
            <AntDesign name="arrowright" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  skipButton: {
    alignSelf: "flex-end",
  },
  skipText: {
    color: "gray",
    fontSize: 18,
  },
  textContainer: {
    backgroundColor: "#f3f3f3",
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 24,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 32,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 24,
  },
  dotContainer: {
    flexDirection: "row",
  },
  dot: {
    width: 24,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#199A8E",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
  nextButton: {
    backgroundColor: "#199A8E",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  nextText: {
    color: "white",
    fontSize: 32,
  },
});
