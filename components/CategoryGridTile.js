import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export const CategoryGridTile = ({ title, color,onPress }) => {

// const navigate=useNavigation()

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#cccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : "",
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer,{ backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
    backgroundColor: "#ccc",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
