import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { generatorVibrationImage, menuImage } from "../../assets";
import { Cards } from "../../Components";
import database from "@react-native-firebase/database";
import { firebase } from "@react-native-firebase/database";

import style from "./style";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   const onValueChange = database()
  //     .ref(`/UsersData/${user.id}`)
  //     .on("value", (snapshot) => {
  //       console.log("User data: ", snapshot.val());
  //     });

  //   // Stop listening for updates when no longer required
  //   return () =>
  //     database().ref(`/UsersData/${user.id}`).off("value", onValueChange);
  // }, [user.id]);

  return (
    <View style={style.home}>
      <View style={style.menuContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Image style={style.menu} source={menuImage} />
        </TouchableOpacity>
        <Text style={style.heading}>Home Appliances Maintenance</Text>
      </View>
      <ScrollView>
        <SafeAreaView>
          <View style={style.imageContainer}>
            <Cards
              title="Generator"
              image={generatorVibrationImage}
              isActive={"active"}
              onPress={() => {
                navigation.navigate("GeneratorDetalis");
              }}
            />

            <Cards
              title="Motor"
              image={generatorVibrationImage}
              isActive={"active"}
              onPress={() => {
                navigation.navigate("MotorDetails");
              }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Home;
