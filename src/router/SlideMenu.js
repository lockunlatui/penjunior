import React from "react";
import { DrawerNavigator } from "react-navigation";
import { AppTabs } from "./AppTabs";
import Menu from "../components/menu/Menu";

export const SlideMenu = DrawerNavigator(
  {
    AppTabs: {
      screen: AppTabs
    }
  },
  {
    drawerWidth: 300,
    drawerPosition: "left",
    contentComponent: props => <Menu {...props} />
  }
);
