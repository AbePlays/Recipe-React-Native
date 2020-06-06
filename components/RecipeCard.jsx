import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

function RecipeCard(props) {
  console.log(props.title);

  async function loadFonts() {
    await loadAsync({
      OSBOLD: require("../assets/Open_Sans/OpenSans-Bold.ttf"),
      RLW: require("../assets/Raleway/Raleway-SemiBold.ttf"),
    });
  }

  return (
    <ScrollView style={styles.topView}>
      <View>
        <Text style={styles.topText}>{props.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.url }} style={styles.image} />
      </View>
      <Text style={styles.midText}>HOW TO MAKE ?</Text>
      <View style={styles.bottomTextContainer}>
        {props.lots.map((line) => (
          <View style={styles.bottomView}>
            <Text style={styles.bottomTopText}>・</Text>
            <Text style={styles.bottomText}>{line}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topView: {
    elevation: 5,
    padding: 10,
    margin: 7,
    backgroundColor: "white",
  },
  topText: {
    fontSize: 23,
    fontWeight: "700",
    textTransform: "uppercase",
    fontFamily: "OSBOLD",
    letterSpacing: 2,
    marginTop: 20,
    textAlign: "center",
  },
  imageContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#ccc",
  },
  midText: {
    textAlign: "center",
    fontFamily: "RLW",
    marginTop: 30,
    fontSize: 20,
    fontWeight: "700",
    color: "#404040",
  },
  bottomTextContainer: {
    marginTop: 20,
  },
  bottomView: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  bottomTopText: {
    fontWeight: "600",
    fontSize: 20,
  },
  bottomText: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
    color: "#808080",
  },
});

export default RecipeCard;
