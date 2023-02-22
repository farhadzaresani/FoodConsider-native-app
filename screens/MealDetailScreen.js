import React, { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IconButton } from "../components/IconButton";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonHandler() {
    console.log("pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={"star"}
            color={"white"}
            onPress={headerButtonHandler}
          />
        );
      },
    });
  }, []);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{selectedMeal.duration}</Text>
          <Text style={styles.detailItem}>
            {selectedMeal.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailItem}>
            {selectedMeal.affordability.toUpperCase()}
          </Text>
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>Ingredients</Text>
            </View>
            {selectedMeal.ingredients.map((item) => (
              <View style={styles.listItem} key={item}>
                <Text style={styles.textItem}>{item}</Text>
              </View>
            ))}
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>Steps</Text>
            </View>
            {selectedMeal.steps.map((item) => (
              <View style={styles.listItem} key={item}>
                <Text style={styles.textItem}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "white",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: "1",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  textItem: {
    color: "#351401",
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
