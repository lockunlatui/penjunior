import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import MauGiao from "../components/pages/maugiao/MauGiao";

export const MauGiaoR = StackNavigator(
  {
    Screen_MauGiao: {
      screen: MauGiao
    }
  },
  {
    headerMode: "none"
  }
);
