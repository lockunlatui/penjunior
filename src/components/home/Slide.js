import React, { Component } from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import imgSlide1 from "../../images/slide1.jpg";
import imgSlide2 from "../../images/slide2.jpg";
import style from "../../Style";
const { height, width } = Dimensions.get("window");
const imgW = width;
const imgH = imgW / 2.5;

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSwiper: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visibleSwiper: true });
    }, 1000);
  }
  render() {
    let swiper = null;
    if (this.state.visibleSwiper) {
      swiper = (
        <Swiper
          containerStyle={{
            flex: 1,
            height: "100%",
            width: "100%",
            alignSelf: "stretch",
            backgroundColor: "#fff"
          }}
          autoplay={true}
          showsPagination={true}
          width={imgW}
          height={imgH}
        >
          <Image source={imgSlide1} style={style.imgStyleSlide}>
            <Text style={style.txtTDSlide}>
              {"  12 lí do khiến trẻ sơ sinh khóc - phần 1 ".toUpperCase()}
            </Text>
            <TouchableOpacity style={style.styleXT}>
              <Text style={style.txtXT}>Xem Thêm</Text>
            </TouchableOpacity>
          </Image>
          <Image source={imgSlide2} style={style.imgStyleSlide}>
            <Text style={style.txtTDSlide}>
              {"  12 lí do khiến trẻ sơ sinh khóc - phần 2 ".toUpperCase()}
            </Text>
            <TouchableOpacity style={style.styleXT}>
              <Text style={style.txtXT}>Xem Thêm</Text>
            </TouchableOpacity>
          </Image>
        </Swiper>
      );
    } else {
      swiper = <View />;
    }
    return (
      <View style={style.wrapSlide}>
        {swiper}
      </View>
    );
  }
}

export default Slide;
