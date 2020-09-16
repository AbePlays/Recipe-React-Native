import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Header({ navigation }) {
  return (
    <View style={{ paddingLeft: 20, marginTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          height: 30,
          alignItems: "center",
          width: "55%",
          justifyContent: "space-between",
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
          fontSize: 40,
          fontWeight: "bold",
          marginTop: 10,
          textDecorationLine: "underline",
        }}
      >
        Results
      </Text>
    </View>
  );
}
