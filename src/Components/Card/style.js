import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../utils/responsive";

export default StyleSheet.create({
  imageChild: {
    backgroundColor: "white",
    paddingLeft: wp(4),
    paddingRight: wp(6),
    borderRadius: wp(5),
    marginTop: wp(6),
    marginHorizontal: hp(3.5),
    minWidth: wp(35),
    maxWidth: wp(35),
    minHeight: wp(35),
    alignItems: "center",
  },
  homeCard: {
    backgroundColor: "white",
    paddingLeft: wp(4),
    paddingRight: wp(7),
    borderRadius: wp(5),
    marginTop: wp(8),
    marginHorizontal: hp(3.5),
    minWidth: wp("80%"),
  },
  imageText1: {
    fontSize: wp(6),
    display: "flex",
    textAlign: "center",
    color: "green",
  },
  images: {
    width: wp(15),
    height: wp(15),
    marginLeft: wp(3),
    marginTop: hp(2),
  },
  imageText: {
    fontSize: wp(5),
    marginLeft: wp(4),
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
  },
  imageText2: {
    fontSize: wp(7),
    marginLeft: wp(29),
    paddingTop: wp(2.6),
    color: "green",
  },
  imageText3: {
    fontSize: wp(5),
    marginLeft: wp(29),
    paddingTop: wp(12),
  },
});
