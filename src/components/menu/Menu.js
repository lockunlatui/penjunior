import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import style from "../../Style";
import avatar from "../../images/avatar.png";
import iconSearch from "../../images/search.png";
import iconEmail from "../../images/mail.png";
import iconPhone from "../../images/phone.png";

class Menu extends Component {
  render() {
    return (
      <View>
        <View style={style.styleDK}>
          <View style={style.styleBAvatar}>
            <Image source={avatar} style={style.styleAvatar} />
          </View>
          <TouchableOpacity style={style.styleBtnDK}>
            <Text style={style.txtDK}>Đăng kí / Đăng nhập</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={style.styleBoCucND}>
            <Text style={{ color: "#000" }}>.</Text>
            <Text style={style.txtND}>Nội dung</Text>
          </View>
          <View style={style.styleND}>
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
              <Image source={iconSearch} style={style.iconSearch} />
              <Text style={{ color: "#000", fontSize: 11, marginLeft: 20 }}>
                Tìm kiếm
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={style.styleBoCucND}>
            <Text style={{ color: "#000" }}>.</Text>
            <Text style={style.txtND}>Liên hệ</Text>
          </View>
          <View style={style.styleLH}>
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
              <Image source={iconEmail} style={style.iconSearch} />
              <Text style={{ color: "#000", fontSize: 11, marginLeft: 20 }}>
                Góp ý ứng dụng
              </Text>
            </TouchableOpacity>
            <Text style={style.txtGY}>
              Mời bạn góp ý giúp chúng tôi hoàn thiện tốt hơn
            </Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Image source={iconPhone} style={style.iconSearch} />
              <Text style={{ color: "#000", fontSize: 11, marginLeft: 20 }}>
                Thông tin
              </Text>
            </View>
            <TextInput
              style={{ color: "#01c8ff", fontSize: 10, marginLeft: 50 }}
              keyboardType={"phone-pad"}
            >
              0939 711 252
            </TextInput>
          </View>
        </View>

        <View style={{ backgroundColor: "#CCC", marginTop: 70 }}>
          <View style={style.styleBoCucND}>
            <Text style={{ color: "#FFF" }}>.</Text>
          </View>
          <View style={style.styleND}>
            <Text style={{ color: "#000", fontSize: 11, marginLeft: 20 }}>
              GoldenA Communication © 2017
            </Text>
            <Text style={{ color: "#000", fontSize: 11, marginLeft: 20 }}>
              Penjunior © 2017. Privacy Policy
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Menu;
