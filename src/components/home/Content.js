import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import style from "../../Style";
import imgContentF from "../../images/contentF.jpg";
import imgContent1 from "../../images/content1.png";
import imgContent2 from "../../images/content2.png";
import imgContent3 from "../../images/content3.png";

class Content extends Component {
  render() {
    return (
      <View>
        <View style={style.styleFContent}>
          <TouchableOpacity>
            <Image source={imgContentF} style={style.imgStyleFContent} />
            <Text style={style.txtTDFContent}>
              {" Làm thế nào để sinh con khỏe mạnh khi bố mẹ đều mang gen bệnh tan máu bẩm sinh(Thalassemia)".toUpperCase()}
            </Text>
          </TouchableOpacity>
          <Text style={style.txtNDFContent}>
            Có thể bạn chưa biết khi cả bố và mẹ đều mang gen bệnh tan máu bẩm
            sinh (hay còn…
          </Text>
        </View>

        <TouchableOpacity style={style.styleContent}>
          <Image source={imgContent1} style={style.imgStyleContent} />
          <View style={style.styleTDContent}>
            <Text style={style.txtTDContent}>
              Những sự thật thú vị về di truyền bố mẹ nên biết
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.styleContent}>
          <Image source={imgContent2} style={style.imgStyleContent} />
          <View style={style.styleTDContent}>
            <Text style={style.txtTDContent}>
              Những loại thực phẩm làm giảm khả năng thụ thai bạn cần phải tránh
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.styleContent}>
          <Image source={imgContent3} style={style.imgStyleContent} />
          <View style={style.styleTDContent}>
            <Text style={style.txtTDContent}>
              Những loại thực phẩm giúp dễ thụ thai các chị em nên biết
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Content;
