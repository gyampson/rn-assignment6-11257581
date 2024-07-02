import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
const remove = require("../assets/remove.png");
const dress1 = require("../assets/dress1.png");
const dress4 = require("../assets/dress4.png");
const dress3 = require("../assets/dress3.png");
const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>cartScreen</Text>
      <ScrollView>
        <View style={styles.images}>
          <Image source={dress1} style={styles.pics} />

          <View>
            <TouchableOpacity onPress={() => alert("Remove from cart")}>
              <Image source={remove} style={styles.button1} />
            </TouchableOpacity>
            <Text styles={styles.write1}>OFFICE WEAR</Text>
            <Text styles={styles.write2}>office wear for your office</Text>
            <Text styles={styles.write3}>$120</Text>
          </View>
        </View>
        <View style={styles.images}>
          <Image source={dress4} style={styles.pics} />

          <View>
            <TouchableOpacity onPress={() => alert("Remove from cart")}>
              <Image source={remove} style={styles.button1} />
            </TouchableOpacity>
            <Text styles={styles.write1}>Lameria</Text>
            <Text styles={styles.write2}>
              Recycle boucle kinght cadigan pink
            </Text>
            <Text styles={styles.write3}>$120</Text>
          </View>
        </View>
        <View style={styles.images}>
          <Image source={dress3} style={styles.pics} />

          <View>
            <TouchableOpacity onPress={() => alert("Remove from cart")}>
              <Image source={remove} style={styles.button1} />
            </TouchableOpacity>
            <Text styles={styles.write1}>Church Wear </Text>
            <Text styles={styles.write2}>
              Recycle boucle kinght cadigan pink
            </Text>
            <Text styles={styles.write3}>$120</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  button1: {
    top: 190,
  },
  images: {
    flexDirection: "row",

    padding: 10,
    height: 250,
    width: 200,
  },
});
