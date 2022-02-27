import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../utils/responsive";

export default StyleSheet.create({
  heading: {
    fontSize: wp(5),
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    padding: wp(5),
    paddingHorizontal: wp(25),
  },
  childContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginTop: hp(2),
  },
  text: {
    fontSize: wp(5),
    paddingLeft: wp(6.5),
    paddingRight: wp(25),
  },

  imageContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: hp(3),
    // marginLeft: wp(2),
    marginBottom: hp(3),
  },
  images: {
    width: wp(20),
    height: wp(20),
    marginLeft: wp(1.5),
    marginTop: hp(2),
  },
  imageText: {
    fontSize: wp(5),
    marginLeft: wp(4),
  },
  imageText1: {
    fontSize: wp(5),
    display: "flex",
    textAlign: "center",
    color: "green",
  },
  imageChild: {
    backgroundColor: "white",
    paddingLeft: wp(4),
    paddingRight: wp(7),
    borderRadius: wp(5),
    marginTop: wp(6),
    marginHorizontal: hp(3.5),
    minWidth: wp(35),
  },
  menuContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#5359D1",
  },
  menu: {
    width: wp(6),
    height: hp(5),
    marginLeft: wp(2.5),
    marginTop: wp(4),
  },
});
