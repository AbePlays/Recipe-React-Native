import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const RecipeCard = ({ item, index }) => {
  const color = ["#fccbcb", "#c8d5b9", "#d0e8f2", "#d8ac9c", "#ffb26b"];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.topView, { backgroundColor: color[index % 5] }]}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.recipe.image }} style={styles.image} />
      </View>
      <Text style={styles.topText}>{item.recipe.label}</Text>
      <Text style={styles.midText}>Ingredients</Text>
      <View style={styles.bottomTextContainer}>
        {item.recipe.ingredientLines.map((line, index) => (
          <View style={styles.bottomView} key={index}>
            <Text style={styles.bottomTopText}>・</Text>
            <Text style={styles.bottomText}>{line}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topView: {
    elevation: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  topText: {
    marginHorizontal: 20,
    fontSize: 23,
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 35,
    marginTop: 20,
    textTransform: "uppercase",
  },
  imageContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  image: {
    height: 250,
    width: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: "white",
  },
  midText: {
    marginHorizontal: 20,
    marginTop: 10,
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
    marginBottom: 20,
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
