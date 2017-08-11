import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import EmBe from "../components/pages/embe/EmBe";

export const EmBeR = StackNavigator(
  {
    Screen_EmBe: {
      screen: EmBe
    }
  },
  {
    headerMode: "none"
  }
);
