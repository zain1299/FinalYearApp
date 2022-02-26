import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../utils/responsive";

export default StyleSheet.create({
  container: {
    paddingTop: 50,
    marginLeft: 35,
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    width: "100%",
    backgroundColor: "#5359D1",
    textTransform: "uppercase",
    padding: 20,
  },

  text: {
    flex: 1,
    fontSize: 22,
    fontWeight: "800",
    justifyContent: "flex-start",
  },
  childHeading: {
    fontSize: 30,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: hp(3),
    // marginLeft: wp(0.1),
    marginBottom: hp(3),
  },
});
