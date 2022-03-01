import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
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
  voltImage,
  electroImage,
} from "../../assets";
import { useSelector } from "react-redux";
import database from "@react-native-firebase/database";

const GeneratorDetails = ({ navigation }) => {
  const randomValues = Math.floor(Math.random() * 4 + 62);
  const generatorRandomValues = Math.floor(Math.random() * 4 + 102);

  const user = useSelector((state) => state.user);

  let [state, setState] = useState([0]);

  useEffect(async () => {
    const onValueChange = database()
      .ref(`/UserDataSensors/`)
      .on("value", (vibration) => {
        let temp = Math.abs(vibration.val()?.Fire);

        setState(temp);
      });
    // Stop listening for updates when no longer required
    return () =>
      database().ref(`/UserDataSensors/`).off("value", onValueChange);
  }, [user.id]);

  return (
    <ScrollView>
      <View style={style.menuContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation?.goBack();
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
            image={voltImage}
            onPress={() => {
              navigation.navigate("GraphDetails", {
                name: "Volt",
              });
            }}
          />

          <Card
            title="Temp"
            image={temperatureImage}
            onPress={() => {
              navigation.navigate("GraphDetails", {
                name: "Temperature",
              });
            }}
          />
          <Card
            title="Gas"
            image={gasImage}
            onPress={() => {
              navigation.navigate("GraphDetails", {
                name: "Gas",
              });
            }}
          />
          {state === 1 ? (
            <Card title="Fire" image={fireImage} readings={"yes"} />
          ) : (
            <Card title="Fire" image={fireImage} readings={"no"} />
          )}
          {state === 1 ? Alert.alert("Fire Fire Fire") : null}

          <Card
            title="Frequency"
            image={electroImage}
            onPress={() => {
              navigation.navigate("GraphDetails", {
                name: "Frequency",
              });
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default GeneratorDetails;
