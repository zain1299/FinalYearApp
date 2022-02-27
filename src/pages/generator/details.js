import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Card } from "../../Components";
import style from "./style";
import {
  fireImage,
  generatorVibrationImage,
  temperatureImage,
  gasImage,
  backImage,
} from "../../assets";

const GeneratorDetails = ({ navigation }) => {
  const randomValues = Math.floor(Math.random() * 4 + 62);
  const generatorRandomValues = Math.floor(Math.random() * 4 + 102);

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
        <Text style={style.heading}>Generator</Text>
      </View>
      <SafeAreaView>
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
          <Card
            title="Vibration"
            image={generatorVibrationImage}
            // readings=""
            onPress={() => {
              navigation.navigate("GraphDetails", {
                name: "Vibration",
              });
            }}
          />
          <Card
            title="Temp"
            image={temperatureImage}
            readings={`${generatorRandomValues} °C`}
          />
          <Card title="Gas" image={gasImage} readings={"Normal"} />
          <Card title="Fire" image={fireImage} readings={"no"} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default GeneratorDetails;
