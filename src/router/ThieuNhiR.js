import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import ThieuNhi from "../components/pages/thieunhi/ThieuNhi";

export const ThieuNhiR = StackNavigator(
  {
    Screen_ThieuNhi: {
      screen: ThieuNhi
    }
  },
  {
    headerMode: "none"
  }
);
