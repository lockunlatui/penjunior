import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import ContentMG from "./ContentMG";
import iconMenu from "../../../images/menu.png";
import iconLogo from "../../../images/logo_penjunior.png";
import style from "../../../Style";

class MauGiao extends Component {
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
        <ContentMG />
      </ScrollView>
    );
  }
}

export default MauGiao;
