import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { generatorVibrationImage } from "../../assets";
import { Card, Cards } from "../../Components";

import style from "./style";

const Home = ({ navigation }) => {
  return (
    <View style={style.home}>
      <Text style={style.heading}>Home Appliances Maintenance</Text>
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
