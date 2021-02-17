import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

import Header from "./Header";
import RecipeCard from "./RecipeCard";

function Results({ route, navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { height, width } = Dimensions.get("screen");

  const food = route.params.food;
  const appID = "YOUR-APP-ID";
  const apiKey = "YOUR-API-KEY";
  const url = `https://api.edamam.com/search?q=${food}&app_id=${appID}&app_key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data");
      try {
        setLoading(true);
        const res = await fetch(url);
        const fetchedData = await res.json();
        setData(fetchedData.hits);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {!loading && <Header navigation={navigation} />}
      {loading ? (
        <View
          style={{
            height,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <ActivityIndicator size="large" color="grey" />
        </View>
      ) : (
        <Carousel
          data={data}
          layout={"stack"}
          layoutCardOffset={10}
          renderItem={RecipeCard}
          sliderWidth={width}
          itemWidth={width}
        />
      )}
    </View>
  );
}

export default Results;
