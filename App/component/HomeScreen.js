import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
const dress1 = require("../assets/dress1.png");
const dress2 = require("../assets/dress2.png");
const dress3 = require("../assets/dress3.png");
const dress4 = require("../assets/dress4.png");
const dress5 = require("../assets/dress5.png");
const dress6 = require("../assets/dress6.png");
const dress7 = require("../assets/dress7.png");
const Menu = require("../assets/Menu.png");
const remove = require("../assets/remove.png");
const add_circle = require("../assets/add_circle.png");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.font}>Our Story</Text>
      </View>
      <ScrollView>
        <View style={styles.images}>
          <Image source={dress1} style={styles.pics} />
          <Image source={dress2} />

          <View>
            <TouchableOpacity onPress={() => alert("Add to cart")}>
              <Image source={add_circle} style={styles.button1} />
              <Image source={add_circle} style={styles.button2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.writes}>
          <Text style={styles.bold}>Office Wear</Text>
          <Text style={styles.bold1}> Black</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.adjust3}>reversible angora cardigan</Text>
          <Text style={styles.adjust3}> reversible angora cardigan</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.money}>$120</Text>
          <Text style={styles.money1}> $120</Text>
        </View>
        <View style={styles.images}>
          <Image source={dress3} style={styles.pics} />
          <Image source={dress4} />
          <View>
            <TouchableOpacity onPress={() => alert("Add to cart")}>
              <Image source={add_circle} style={styles.button1} />
              <Image source={add_circle} style={styles.button2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.writes}>
          <Text style={styles.bold}>Church Wear</Text>
          <Text style={styles.bold1}>Lamerei</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.adjust3}>reversible angora cardigan</Text>
          <Text style={styles.adjust3}> reversible angora cardigan</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.money}>$120</Text>
          <Text style={styles.money1}> $120</Text>
        </View>
        <View style={styles.images}>
          <Image source={dress5} style={styles.pics} />
          <Image source={dress6} />
          <View>
            <TouchableOpacity onPress={() => alert("Add to cart")}>
              <Image source={add_circle} style={styles.button1} />
              <Image source={add_circle} style={styles.button2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.writes}>
          <Text style={styles.bold}>21WN</Text>
          <Text style={styles.bold1}> Lopo</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.adjust3}>reversible angora cardigan</Text>
          <Text style={styles.adjust3}> reversible angora cardigan</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.money}>$120</Text>
          <Text style={styles.money1}> $120</Text>
        </View>
        <View style={styles.images}>
          <Image source={dress7} style={styles.pics} />
          <Image source={dress3} />
          <View>
            <TouchableOpacity onPress={() => alert("Add to cart")}>
              <Image source={add_circle} style={styles.button1} />
              <Image source={add_circle} style={styles.button2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.writes}>
          <Text style={styles.bold}>21WN</Text>
          <Text style={styles.bold1}> Lame</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.adjust3}>reversible angora cardigan</Text>
          <Text style={styles.adjust3}> reversible angora cardigan</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.money}>$120</Text>
          <Text style={styles.money1}> $120</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  font: {},
  images: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingLeft: 20,
  },
  pics: {
    right: 10,
  },
  writes: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingLeft: 10,
    paddingRight: 20,
  },
  header: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  font: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    left: 100,
  },
  button1: {
    right: 200,
    top: 190,
  },
  button2: {
    right: 25,
    top: 165,
  },
  adjust3: {},
  money1: {
    right: 120,
  },
  bold: {
    fontWeight: "bold",
  },
  bold1: {
    right: 110,
    fontWeight: "bold",
  },
});
