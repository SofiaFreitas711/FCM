import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ title, onChange, style, titleStyle }) => {
  return (
    <TouchableOpacity onChange={onChange}>
      <View style={style ? style : styles.container}>
        <Text style={titleStyle ? titleStyle : styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    /* padding e margin */
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 20,
    /* alinhamentos */
    alignItems: "center",
    justifyContent: "center",
    /* customizar */
    borderRadius: 15,
    backgroundColor: "#2E3192",
  },

  title: {
    fontFamily: "Barlow",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 22,
    color: "#FFFFFF",
  },
});

export default Button;
