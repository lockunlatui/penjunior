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
    padding: 10
  },
  wrapH: {
    height: height * 0.08,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    width: width * 0.08,
    height: width * 0.08
  },
  iconLogo: {
    width: width * 0.1,
    height: width * 0.08
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
    fontSize: 25,
    color: "#333333",
    padding: 10
  },
  styleXT: {
    borderColor: "#eaeaea",
    borderWidth: 1
  },
  txtXT: {
    fontSize: 15,
    color: "#01c8ff",
    padding: 5
  },
  imgStyleFContent: {
    width: imgWFContent,
    height: imgHFContent
  },
  txtTDFContent: {
    fontWeight: "700",
    color: "#4f5d73",
    fontSize: 20,
    padding: 10
  },
  txtNDFContent: {
    color: "#888888",
    fontSize: 15,
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
    fontSize: 15,
    height: height * 0.1,
    marginTop: 10,
    color: "#888888"
  },
  txtDK: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "bold"
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
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold"
  },
  styleND: {
    height: "auto",
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
    height: "auto",
    borderLeftColor: "#CCC",
    borderLeftWidth: 1,
    marginLeft: 22
  },
  txtGY: {
    fontSize: 11,
    marginTop: 10,
    marginLeft: 50
  },
  txtCham: {
    color: "#DDD"
  },
  txtNDC: {
    color: "#000",
    fontSize: 13,
    marginLeft: 10
  },
  styleCopyR: {
    backgroundColor: "#CCC",
    marginTop: 20
  },
  txtPhone: {
    fontSize: 11,
    marginTop: 10,
    marginLeft: 50,
    color: "#01c8ff"
  },
  styleNDCR: {
    height: "auto",
    borderLeftColor: "#CCC",
    borderLeftWidth: 1,
    marginLeft: 22,
    margin: 10
  }
};
