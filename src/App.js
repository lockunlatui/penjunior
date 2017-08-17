import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { SlideMenu } from "./router/SlideMenu";
import Expo from "expo";

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <SlideMenu />
      </View>
    );
  }
}

export default App;
