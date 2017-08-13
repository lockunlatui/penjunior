import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import iconMenu from "../../../images/menu.png";
import iconLogo from "../../../images/logo_penjunior.png";
import style from "../../../Style";
import ContentTMT from "./ContentTMT";

class TruocMangThai extends Component {
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
        <ContentTMT />
      </ScrollView>
    );
  }
}

export default TruocMangThai;
