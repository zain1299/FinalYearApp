import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { generatorImage, menuImage, motorImage } from "../../assets";
import { Cards } from "../../Components";
import database from "@react-native-firebase/database";
import { firebase } from "@react-native-firebase/database";

import style from "./style";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
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
              image={generatorImage}
              isActive={"active"}
              onPress={() => {
                navigation.navigate("GeneratorDetalis");
              }}
            />

            <Cards
              title="Motor"
              image={motorImage}
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
