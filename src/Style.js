import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const imgWSlide = width;
const imgHSlide = imgWSlide / 1366 * 768;
const imgWFContent = width;
const imgHFContent = imgWFContent / 3;
const imgWContent = width / 2.5;
const imgHContent = imgWContent / 1366 * 768;

export default {
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
    width: width * 0.08,
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
    fontSize: 25,
    color: "#333333",
    padding: 10
  },
  styleXT: {
    borderColor: "#eaeaea",
    borderWidth: 1
  },
  txtXT: {
    color: "#01c8ff",
    fontWeight: "bold",
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
    margin: 10,
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    height: height * 0.08
  },
  styleFContent: {},
  imgStyleContent: {
    width: imgWContent,
    height: imgHContent
  },
  styleTDContent: {
    width: width * 0.5,
    marginLeft: 10
  },
  styleContent: {
    flexDirection: "row",
    borderBottomColor: "#DDD",
    borderBottomWidth: 0.5,
    margin: 10
  },
  txtTDContent: {
    fontSize: 20,
    height: height * 0.1
  }
};
