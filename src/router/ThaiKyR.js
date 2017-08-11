import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import ThaiKy from "../components/pages/thaiky/ThaiKy";

export const ThaiKyR = StackNavigator(
  {
    Screen_ThaiKy: {
      screen: ThaiKy
    }
  },
  {
    headerMode: "none"
  }
);
