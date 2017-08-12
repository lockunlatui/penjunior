import React, { Component } from "react";
import { Image, TouchableOpacity, View } from "react-native";
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

export const AppTabs = StackNavigator({
  HomeR: {
    screen: TabNavigator(
      {
        Screen_Home: {
          screen: HomeR,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
              <Image
                source={iconHome}
                style={[style.iconHome, { tintColor: tintColor }]}
              />,
            title: "Home"
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
        lazy: true,
        mode: "modal",
        tabBarOptions: {
          tabStyle: {
            width: 85,
            height: 50,
            borderBottomWidth: 2,
            borderBottomColor: "#CCC"
          },
          upperCaseLabel: false,
          labelStyle: {
            fontSize: 12,
            fontWeight: "bold"
          },
          style: {
            backgroundColor: "#FFF"
          },
          activeTintColor: "#01c8ff",
          inactiveTintColor: "#979797",
          scrollEnabled: true,
          pressColor: "#CCC"
        }
      }
    )
  }
});
