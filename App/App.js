import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import "react-native-gesture-handler";
import { FontDisplay, useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import HomeScreen from "./component/HomeScreen";
import CartScreen from "./component/CartScreen";
const Drawer = createDrawerNavigator();
const Logo = require("./assets/Logo.png");
const Menu = require("./assets/Menu.png");
const shoppingBag = require("./assets/shoppingBag.png");
const Search = require("./assets/Search.png");
SplashScreen.preventAutoHideAsync();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Open Fashion" component={HomeScreen} />

      <Drawer.Screen name="Check Out" component={CartScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <ScrollView>
        <HomeScreen />
        <CartScreen />
      </ScrollView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    paddingTop: 20,
  },
});
