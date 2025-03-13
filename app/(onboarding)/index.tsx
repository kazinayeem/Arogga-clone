import { Link } from "expo-router";
import React, { useEffect } from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    StatusBar.setBackgroundColor("#199A8E");
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/mainlogo.png")}
        alt="logo"
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Next page button */}
      <Link href="/(onboarding)/Slider">
        <View style={styles.nextButton}>
          <Text style={styles.nextText}>Next</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#199A8E",
  },
  logo: {
    width: "50%",
    height: "50%",
  },
  nextButton: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginTop: 10,
  },
  nextText: {
    color: "#199A8E",
    fontSize: 20,
    fontWeight: "bold",
  },
});
