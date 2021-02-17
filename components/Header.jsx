import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Header({ navigation }) {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="keyboard-backspace" size={30} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 25,
          marginVertical: 10,
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: 3,
          textTransform: "uppercase",
          fontWeight: "100",
        }}
      >
        Results
      </Text>
    </View>
  );
}
