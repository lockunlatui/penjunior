import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const imgWSlide = width;
const imgHSlide = imgWSlide / 1366 * 768;
const imgWFContent = width;
const imgHFContent = imgWFContent / 2;
const imgWContent = width / 2.5;
const imgHContent = imgWContent / 1366 * 768;

export default {
  scrWrap: {
    backgroundColor: "#FFF"
  },
  nav: {
    height: height * 0.08,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "#CCC",
    borderBottomWidth: 1
  },
  wrapH: {
    height: height * 0.08,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    width: width * 0.06,
    height: width * 0.06
  },
  iconLogo: {
    width: width * 0.1,
    height: width * 0.06
  },
  iconHome: {
    width: width * 0.06,
    height: width * 0.06
  },
  wrapSlide: {
    height: height * 0.25
  },
  imgStyleSlide: {
    width: imgWSlide,
    height: imgHSlide,
    alignItems: "flex-start",
    padding: 10
  },
  txtTDSlide: {
    fontSize: 15,
    color: "#333333",
    padding: 10,
    fontFamily: "Roboto-Bold"
  },
  styleXT: {
    borderColor: "#eaeaea",
    borderWidth: 1
  },
  txtXT: {
    fontSize: 11,
    fontFamily: "Roboto-Bold",
    color: "#01c8ff",
    padding: 5
  },
  imgStyleFContent: {
    width: imgWFContent,
    height: imgHFContent
  },
  txtTDFContent: {
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    color: "#4f5d73",
    fontSize: 13,
    padding: 10
  },
  txtNDFContent: {
    fontFamily: "Roboto-Regular",
    color: "#888888",
    fontSize: 11,
    padding: 10,
    height: height * 0.1
  },
  styleFContent: {},
  imgStyleContent: {
    width: imgWContent,
    height: imgHContent,
    marginTop: 10
  },
  styleTDContent: {
    width: width * 0.5,
    marginLeft: 10
  },
  styleContent: {
    flexDirection: "row",
    borderTopColor: "#DDD",
    borderTopWidth: 0.5,
    margin: 10
  },
  txtTDContent: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    height: height * 0.1,
    marginTop: 10
  },
  txtDK: {
    color: "#FFF",
    fontFamily: "Roboto-Regular",
    fontSize: 13
  },
  styleDK: {
    height: height * 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#01c8ff"
  },
  styleAvatar: {
    width: width * 0.2,
    height: width * 0.2
  },
  styleBAvatar: {
    borderRadius: 50,
    backgroundColor: "#f1f1f1"
  },
  styleBtnDK: {
    padding: 10
  },
  txtND: {
    color: "#000",
    marginLeft: 10
  },
  styleND: {
    height: height * 0.1,
    borderLeftColor: "#CCC",
    borderLeftWidth: 1,
    marginLeft: 22
  },
  styleBoCucND: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20
  },
  iconSearch: {
    width: width * 0.04,
    height: width * 0.04,
    marginLeft: 20
  },
  styleLH: {
    height: height * 0.19,
    borderLeftColor: "#CCC",
    borderLeftWidth: 1,
    marginLeft: 22
  },
  txtGY: {
    fontSize: 10,
    marginLeft: 60
  }
};
