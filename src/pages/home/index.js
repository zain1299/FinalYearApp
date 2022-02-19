import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { generatorVibrationImage } from "../../assets";
import { Card } from "../../Components";

import style from "./style";

const Home = ({ navigation }) => {
  return (
    <View style={style.home}>
      <Text style={style.heading}>Home Appliances Maintenance</Text>
      <ScrollView>
        <SafeAreaView>
          <View style={style.imageContainer}>
            <Card
              title="Generator"
              image={generatorVibrationImage}
              onPress={() => {
                navigation.navigate("GeneratorDetalis");
              }}
            />
            <Card
              title="Generator"
              image={generatorVibrationImage}
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
