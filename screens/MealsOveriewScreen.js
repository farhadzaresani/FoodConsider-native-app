import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MealItem } from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const MealsOveriewScreen = ({ route }) => {
  const catId = route.params.categoryId;
  // const route=useRoute()
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  console.log(MEALS);

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOveriewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
