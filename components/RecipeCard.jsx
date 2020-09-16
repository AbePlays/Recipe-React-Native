import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function RecipeCard(props) {
  console.log(props.title);

  return (
    <View style={[styles.topView, { backgroundColor: props.bgColor }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.url }} style={styles.image} />
      </View>
      <Text style={styles.topText}>{props.title}</Text>
      <Text style={styles.midText}>
        How to make <Icon name="arrowright" size={20} />
      </Text>
      <View style={styles.bottomTextContainer}>
        {props.lots.map((line) => (
          <View style={styles.bottomView}>
            <Text style={styles.bottomTopText}>・</Text>
            <Text style={styles.bottomText}>{line}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    elevation: 2,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  topText: {
    paddingLeft: 20,
    fontSize: 23,
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 35,
    marginTop: 20,
    textTransform: "uppercase",
  },
  imageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "white",
  },
  midText: {
    paddingLeft: 20,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
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
    color: "#666",
  },
});

export default RecipeCard;
