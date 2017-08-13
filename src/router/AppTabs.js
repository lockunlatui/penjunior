import React, { Component } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet
} from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { HomeR } from "./HomeR";
import { TruocMangThaiR } from "./TruocMangThaiR";
import { ThaiKyR } from "./ThaiKyR";
import { SoSinhR } from "./SoSinhR";
import { EmBeR } from "./EmBeR";
import { MauGiaoR } from "./MauGiaoR";
import { ThieuNhiR } from "./ThieuNhiR";
import { LienHeR } from "./LienHeR";
import style from "../Style";
import iconHome from "../images/home.png";
const { width } = Dimensions.get("window");

export const AppTabs = StackNavigator({
  HomeR: {
    screen: TabNavigator(
      {
        Screen_Home: {
          screen: HomeR,
          navigationOptions: {
            tabBarLabel: ({ tintColor }) =>
              <Image
                source={iconHome}
                style={[style.iconHome, { tintColor: tintColor }]}
              />
          }
        },
        Screen_TruocMangThai: {
          screen: TruocMangThaiR,
          navigationOptions: {
            tabBarLabel: "Trước Mang Thai"
          }
        },
        Screen_ThaiKy: {
          screen: ThaiKyR,
          navigationOptions: {
            tabBarLabel: "Thai kỳ"
          }
        },
        Screen_SoSinh: {
          screen: SoSinhR,
          navigationOptions: {
            tabBarLabel: "Sơ sinh"
          }
        },
        Screen_EmBe: {
          screen: EmBeR,
          navigationOptions: {
            tabBarLabel: "Em bé"
          }
        },
        Screen_MauGiao: {
          screen: MauGiaoR,
          navigationOptions: {
            tabBarLabel: "Mẫu giáo"
          }
        },
        Screen_ThieuNhi: {
          screen: ThieuNhiR,
          navigationOptions: {
            tabBarLabel: "Thiếu nhi"
          }
        }
      },
      {
        ...TabNavigator.Presets.AndroidTopTabs,
        tabBarPosition: "top",
        swipeEnabled: true,
        animationEnabled: true,
        mode: "modal",
        tabBarOptions: {
          indicatorStyle: {
            backgroundColor: "#01c8ff",
            height: 3
          },
          tabStyle: {
            width: 80,
            height: 50,
            marginTop: 10
          },
          upperCaseLabel: false,
          labelStyle: {
            fontSize: 13,
            fontWeight: "bold"
          },
          style: {
            backgroundColor: "#FFF",
            borderTopColor: "#DDD",
            borderTopWidth: 0.5
          },
          activeTintColor: "#01c8ff",
          inactiveTintColor: "#CCC",
          scrollEnabled: true,
          pressColor: "#CCC"
        }
      }
    )
  }
});

const styles = StyleSheet.create({
  tabLabelStyle: {
    color: "#666",
    borderRadius: 100,
    padding: 6,
    paddingLeft: 16,
    paddingRight: 16,
    margin: 0
  },
  activeTabLabelStyle: {
    backgroundColor: "#01c8ff"
  }
});
