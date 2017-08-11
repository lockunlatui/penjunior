import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import LienHe from "../components/pages/LienHe";

export const LienHeR = StackNavigator(
  {
    Screen_LienHe: {
      screen: LienHe
    }
  },
  {
    headerMode: "none"
  }
);
