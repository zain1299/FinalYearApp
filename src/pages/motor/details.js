import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import style from "./style";
import gas from "../../assets/images/gas.png";
import fire from "../../assets/images/fire.png";
import current from "../../assets/images/current.jpg";
import CustomCard from "../../Components/Card";

const MotorDetails = () => {
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
          <CustomCard title="Fire" image={fire} readings={"no"} />
          <CustomCard title="Gas" image={gas} readings={"Ok"} />
          <CustomCard title="Current" image={current} readings={"Readings"} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MotorDetails;
