import React from "react";
import { SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import style from "./style";

import fire from "../../assets/images/fire.png";
import generatorVibration from "../../assets/images/generatorVibration.png";
import temperature from "../../assets/images/temperature.png";
import gas from "../../assets/images/gas.png";

const GeneratorDetails = () => {
  const card = (title, image, readings) => (
    <View style={style.imageChild}>
      <Text style={style.imageText1}>{readings}</Text>
      <Image style={style.images} source={image} />
      <Text style={style.imageText}>{title}</Text>
    </View>
  );

  const randomValues = Math.floor(Math.random() * 4 + 62);
  const generatorRandomValues = Math.floor(Math.random() * 4 + 102);

  return (
    <ScrollView>
      <Text style={style.heading}>Generator</Text>
      <SafeAreaView style={style.mainContainer}>
        <View style={style.childContainer}>
          <View>
            <Text style={style.text}>33 °C</Text>
            <Text style={style.text}>Temperature</Text>
          </View>
          <View>
            <Text style={style.text}>87%</Text>
            <Text style={style.text}>HUMIDITY</Text>
          </View>
        </View>

        <View style={style.imageContainer}>
          {card("Fire ", fire, "Status : no")}
          {card("Vibration", generatorVibration, `${randomValues} %`)}
          {card("Temp", temperature, `${generatorRandomValues} °C`)}
          {card("Gas", gas, "Normal")}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default GeneratorDetails;
