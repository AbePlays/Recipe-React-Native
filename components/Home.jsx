import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Home({ navigation }) {
  const [food, setFood] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#c9ead0" }}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/food.png")}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Recipe App</Text>
        <Text style={styles.textSubheading}>
          Search Recipes For Your Favorite Food
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Name Of Food"
          style={styles.input}
          onChangeText={(text) => {
            setFood(text);
          }}
        ></TextInput>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnTextContainer}
          onPress={() =>
            navigation.navigate("Results", {
              food: food,
            })
          }
        >
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 80,
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
  },
  textContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  textHeading: {
    fontWeight: "bold",
    fontSize: 25,
    color: "green",
  },
  textSubheading: {
    marginTop: 5,
    color: "green",
  },
  inputContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  input: {
    maxWidth: 500,
    width: "80%",
    borderColor: "green",
    borderWidth: 3,
    borderRadius: 10,
    height: 50,
    paddingLeft: 10,
    color: "green",
  },
  btnContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  btnTextContainer: {
    maxWidth: 500,

    borderRadius: 10,
    backgroundColor: "green",
    width: "80%",
    height: 50,
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});

export default Home;
