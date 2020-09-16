import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { View, ActivityIndicator } from "react-native";
import Header from "./Header";
import RecipeCard from "./RecipeCard";

function Results({ route, navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const food = route.params.food;
  const appID = "636fda1d";
  const apiKey = "12a8a1f925c236c992926c9ef4955e39";
  const url = `https://api.edamam.com/search?q=${food}&app_id=${appID}&app_key=${apiKey}`;

  const color = ["#fccbcb", "#c8d5b9"];

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.hits))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {loading ? <></> : <Header navigation={navigation} />}
      <ScrollView style={{ marginTop: 20, flex: 1 }}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="grey"
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          />
        ) : (
          data.map((stuff, index) => (
            <RecipeCard
              key={index}
              bgColor={color[index % 2]}
              title={stuff.recipe.label}
              url={stuff.recipe.image}
              lots={stuff.recipe.ingredientLines}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

export default Results;
