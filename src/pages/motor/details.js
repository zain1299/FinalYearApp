import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
// import components
import { Card } from "../../Components";
//  import style
import style from "./style";
// import pictures
import { fireImage, gasImage, currentImage, backImage } from "../../assets";

const MotorDetails = () => {
  return (
    <ScrollView>
      <View style={style.menuContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={style.menu} source={backImage} />
        </TouchableOpacity>

        <Text style={style.heading}>Motor Details</Text>
      </View>

      <SafeAreaView style={style.mainContainer}>
        <View style={style.childContainer}>
          <View>
            <Text style={style.text}>40 °C</Text>
            <Text style={style.text}>TEMPERATURE</Text>
          </View>
          <View>
            <Text style={style.text}>40%</Text>
            <Text style={style.text}>HUMIDITY</Text>
          </View>
        </View>

        <View style={style.imageContainer}>
          <Card title="Fire" image={fireImage} readings={"no"} />
          <Card title="Gas" image={gasImage} readings={"Ok"} />
          <Card title="Current" image={currentImage} readings={"Readings"} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MotorDetails;
