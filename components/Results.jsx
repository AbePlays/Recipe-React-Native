import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import RecipeCard from "./RecipeCard";

function Results({ route, navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const food = route.params.food;
  const appID = "636fda1d";
  const apiKey = "12a8a1f925c236c992926c9ef4955e39";
  const url = `https://api.edamam.com/search?q=${food}&app_id=${appID}&app_key=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.hits))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="green"
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        />
      ) : (
        data.map((stuff) => (
          <RecipeCard
            title={stuff.recipe.label}
            url={stuff.recipe.image}
            lots={stuff.recipe.ingredientLines}
          />
        ))
      )}
    </View>
  );
}

export default Results;
