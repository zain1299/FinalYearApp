import React from "react";
import { SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import style from "./style";
import gas from "../../assets/images/gas.png";
import fire from "../../assets/images/fire.png";
import current from "../../assets/images/current.jpg";

const MotorDetails = () => {
  const card = (title, image) => (
    <View style={style.imageChild}>
      <Text style={style.imageText1}>Readings</Text>
      <Image style={style.images} source={image} />
      <Text style={style.imageText}>{title}</Text>
    </View>
  );

  return (
    <ScrollView>
      <Text style={style.heading}>Motor Details</Text>
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
          {card("Fire", fire)}
          {card("Gas", gas)}
          {card("Current ", current)}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MotorDetails;
