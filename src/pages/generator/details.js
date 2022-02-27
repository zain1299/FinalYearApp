import React, { useEffect, useState } from "react";
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
  currentImage,
} from "../../assets";
import { useSelector } from "react-redux";
import database from "@react-native-firebase/database";

const GeneratorDetails = ({ navigation }) => {
  const randomValues = Math.floor(Math.random() * 4 + 62);
  const generatorRandomValues = Math.floor(Math.random() * 4 + 102);

  const user = useSelector((state) => state.user);

  const [state, setState] = useState();

  // useEffect(async () => {
  //   const onValueChange = database()
  //     .ref(`/UsersData/${user.id}`)
  //     .on("value", (snapshot) => {
  //       // let arr = [];

  //       // if (arr?.length < 10) {
  //       //   const data = snapshot.val().test.Voltage;

  //       //   arr.push(snapshot.val().test.Voltage);
  //       // }
  //       setState(snapshot.val().test.Voltage);
  //     });

  //   // Stop listening for updates when no longer requiredSS
  //   return () =>
  //     database().ref(`/UsersData/${user.id}`).off("value", onValueChange);
  // }, [user.id]);

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
            onPress={() => {
              navigation.navigate("GraphDetails", {
                name: "Vibration",
              });
            }}
          />
          <Card
            title="Current"
            image={currentImage}
            onPress={() => {
              navigation.navigate("GraphDetails", {
                name: "Current",
              });
            }}
          />

          <Card
            title="Volt"
            image={currentImage}
            onPress={() => {
              navigation.navigate("GraphDetails", {
                name: "Volt",
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
          <Card
            title="Electro Magnetic"
            image={fireImage}
            onPress={() => {
              navigation.navigate("GraphDetails", {
                name: "Electro Magnetic",
              });
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default GeneratorDetails;
