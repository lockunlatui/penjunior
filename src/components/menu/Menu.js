import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import Communications from "react-native-communications";
import style from "../../Style";
import avatar from "../../images/avatar.png";
import iconSearch from "../../images/search.png";
import iconEmail from "../../images/mail.png";
import iconPhone from "../../images/phone.png";

class Menu extends Component {
  render() {
    return (
      <ScrollView>
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
            <Text style={style.txtCham}>●</Text>
            <Text style={style.txtND}>Nội dung</Text>
          </View>
          <View style={style.styleND}>
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
              <Image source={iconSearch} style={style.iconSearch} />
              <Text style={style.txtNDC}>Tìm kiếm</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.styleBoCucND}>
          <Text style={style.txtCham}>●</Text>
          <Text style={style.txtND}>Liên hệ</Text>
        </View>
        <View style={style.styleLH}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image source={iconEmail} style={style.iconSearch} />
              <Text style={style.txtNDC}>Góp ý ứng dụng</Text>
            </View>
            <Text style={style.txtGY}>
              Mời bạn góp ý giúp chúng tôi hoàn thiện tốt hơn
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Image source={iconPhone} style={style.iconSearch} />
            <Text style={style.txtNDC}>Thông tin</Text>
          </View>
          <TouchableOpacity
            onPress={() => Communications.phonecall("090 386 9369", true)}
          >
            <Text style={style.txtPhone}>090 386 9369</Text>
          </TouchableOpacity>
        </View>

        <View style={style.styleCopyR}>
          <View style={style.styleNDCR}>
            <Text style={style.txtNDC}>GoldenA Communication © 2017</Text>
            <Text style={style.txtNDC}>Penjunior © 2017. Privacy Policy</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Menu;
