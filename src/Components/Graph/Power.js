import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, Alert } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import database from "@react-native-firebase/database";
import style from "./style";

const Power = ({ data }) => {
  const user = useSelector((state) => state?.user);

  const [energyState, setEnergyState] = useState([0]);

  const [powerState, setPowerState] = useState([0]);

  const [factorState, setFactorState] = useState([0]);

  useEffect(async () => {
    const onValueChange = database()
      .ref(`/UserDataSensors/`)
      .on("value", (energy) => {
        let value = Math.abs(energy.val()?.Energy);

        setEnergyState(value);
      });

    const onValueChange2 = database()
      .ref(`/UserDataSensors/`)
      .on("value", (power) => {
        let value2 = Math.abs(power.val()?.Power);

        setPowerState(value2);
      });

    const onValueChange3 = database()
      .ref(`/UserDataSensors/`)
      .on("value", (factor) => {
        let value3 = Math.abs(factor.val()?.PowerFactor);

        setFactorState(value3);
      });
    // Stop listening for updates when no longer required
    return () =>
      database()
        .ref(`/UserDataSensors/`)
        .off("value", onValueChange, onValueChange2, onValueChange3);
  }, [user.id]);

  return (
    <View style={style.childContainer}>
      <View>
        <Text style={style.text}>Energy</Text>
        <Text style={style.text}>{energyState ? energyState : 0}</Text>
      </View>

      <View style={{ marginTop: 25 }}>
        <Text style={style.text}>Power</Text>
        <Text style={style.text}>{powerState ? powerState : 0}</Text>
      </View>

      <View style={{ marginTop: 25 }}>
        <Text style={style.text}>Power Factor</Text>
        <Text style={style.text}>{factorState ? factorState : 0}</Text>
      </View>
    </View>
  );
};

export default Power;
