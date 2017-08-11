import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import TruocMangThai from "../components/pages/truocmangthai/TruocMangThai";

export const TruocMangThaiR = StackNavigator(
  {
    Screen_TruocMangThai: {
      screen: TruocMangThai
    }
  },
  {
    headerMode: "none"
  }
);
