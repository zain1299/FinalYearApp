import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import style from "./style";

const Home = ({ navigation }) => {
  console.log("navigation", navigation);
  return (
    <View style={style.home}>
      <Text style={style.heading}>Home Appliances Maintenance</Text>
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View>
            <Text style={style.childHeading}>About Our Servies</Text>
            <Text style={style.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
