import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { TouchableOpacity, Image } from "react-native";
import Home from "../components/home/Home";

export const HomeR = StackNavigator(
  {
    Screen_Home: {
      screen: Home
    }
  },
  {
    headerMode: "none"
  }
);
