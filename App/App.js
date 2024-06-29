import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import HomeScreen from "./component/HomeScreen";
import CartScreen from "./component/CartScreen";
const Drawer = createDrawerNavigator();
const Logo = require("./assets/Logo.png");
const Menu = require("./assets/Menu.png");
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Open Fashion"
        component={HomeScreen}
        options={{ tabBarIcon: ({ color }) => <Image source={Menu} /> }}
      />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});
