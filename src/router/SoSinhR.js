import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import SoSinh from "../components/pages/sosinh/SoSinh";

export const SoSinhR = StackNavigator(
  {
    Screen_SoSinh: {
      screen: SoSinh
    }
  },
  {
    headerMode: "none"
  }
);
