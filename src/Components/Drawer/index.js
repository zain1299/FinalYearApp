import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import auth from "@react-native-firebase/auth";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { userImage } from "../../assets";
import { useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { logout } from "../../redux/action";

const CustomDrawer = (props, { navigation }) => {
  const data = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const signout = () => {
    auth()
      .signOut()
      .then(() => {
        dispatch(logout());
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <ImageBackground
          source={require("../../assets/images/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={userImage}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontFamily: "Roboto-Medium",
              marginBottom: 5,
            }}
          >
            {data.name}
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => signout()}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Roboto-Medium",
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
