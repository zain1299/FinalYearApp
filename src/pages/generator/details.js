import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";

// import components
import CustomCard from "../../Components/Card";

//  import style
import style from "./style";

// import pictures
import fire from "../../assets/images/fire.png";
import generatorVibration from "../../assets/images/generatorVibration.png";
import temperature from "../../assets/images/temperature.png";
import gas from "../../assets/images/gas.png";

const GeneratorDetails = () => {
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
          <CustomCard title="Fire" image={fire} readings={"no"} />
          <CustomCard
            title="Vibration"
            image={generatorVibration}
            readings={`${randomValues} %`}
          />
          <CustomCard
            title="Temp"
            image={temperature}
            readings={`${generatorRandomValues} °C`}
          />
          <CustomCard title="Gas" image={gas} readings={"Normal"} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default GeneratorDetails;
