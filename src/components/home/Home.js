import React, { Component } from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
  View
} from "react-native";
import Slide from "./Slide";
import Content from "./Content";
import iconMenu from "../../images/menu.png";
import iconLogo from "../../images/logo_penjunior.png";
import style from "../../Style";

class Home extends Component {
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
    const { navigation } = this.props;
    return (
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <Slide />
        <Content />
      </ScrollView>
    );
  }
}

export default Home;
