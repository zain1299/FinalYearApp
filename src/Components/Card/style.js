import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../utils/responsive";

export default StyleSheet.create({
  imageChild: {
    backgroundColor: "white",
    paddingLeft: wp(4),
    paddingRight: wp(7),
    borderRadius: wp(5),
    marginTop: wp(6),
    marginHorizontal: hp(3.5),
    minWidth: wp(35),
  },
  imageText1: {
    fontSize: wp(5),
    display: "flex",
    textAlign: "center",
    color: "green",
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
});
