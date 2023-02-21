import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOveriewScreen from "./screens/MealsOveriewScreen";


const Stack=createNativeStackNavigator()


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meals Categories" component={CategoriesScreen}/>
        <Stack.Screen name="Meal" component={MealsOveriewScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
