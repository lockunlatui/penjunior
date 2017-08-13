import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import ContentTN from "./ContentTN";
import iconMenu from "../../../images/menu.png";
import iconLogo from "../../../images/logo_penjunior.png";
import style from "../../../Style";

class ThieuNhi extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <View style={style.nav}>
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
          <Image source={iconMenu} style={style.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_Home")}>
          <Image source={iconLogo} style={style.iconLogo} />
        </TouchableOpacity>
        <TouchableOpacity />
      </View>
    )
  });
  render() {
    return (
      <ScrollView style={style.scrWrap}>
        <ContentTN />
      </ScrollView>
    );
  }
}

export default ThieuNhi;
