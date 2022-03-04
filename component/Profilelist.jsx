import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../theme/Colors";

export default function Profilelist(props) {
  return (
    <TouchableWithoutFeedback onPress={() => props.onselect(props.display)}>
      <View style={{ ...styles.row, margin: 10 }}>
        <View style={{ ...styles.row, justifyContent: "flex-start" }}>
          <Ionicons
            name={props.icon}
            size={20}
            color={props.type == "danger" ? Colors.primary : Colors.dark}
          />
          <Text
            style={{
              fontSize: 20,
              marginLeft: 10,
              color: props.type == "danger" ? Colors.primary : Colors.dark,
            }}
          >
            {props.display}
          </Text>
        </View>
        {props.right && (
          <View style={{ ...styles.row, justifyContent: "flex-start" }}>
            {/* <Ionicons name={props.rightIcon} size={20} color={Colors.secondaryText} /> */}
            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
                color: Colors.secondaryText,
              }}
            >
              {props.rightDisplay}
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  row: {
    margin: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
