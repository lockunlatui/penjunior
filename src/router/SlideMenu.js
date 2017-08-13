import React from "react";
import { Dimensions } from "react-native";
import { DrawerNavigator } from "react-navigation";
import { AppTabs } from "./AppTabs";
import Menu from "../components/menu/Menu";
const { width } = Dimensions.get("window");

export const SlideMenu = DrawerNavigator(
  {
    AppTabs: {
      screen: AppTabs
    }
  },
  {
    drawerWidth: width * 0.7,
    drawerPosition: "left",
    contentComponent: props => <Menu {...props} />
  }
);
