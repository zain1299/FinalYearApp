import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import style from "./style";
import database from "@react-native-firebase/database";

const GasChart = ({ data }) => {
  const user = useSelector((state) => state?.user);

  let [state, setState] = useState([100]);
  let temp = [];

  useEffect(async () => {
    const onValueChange = database()
      .ref(`/UserDataSensors/`)
      .on("value", (gas) => {
        temp.push(Math.abs(gas.val()?.Gas));
        if (temp?.length > 10) {
          temp.length = 8;
          temp.shift();
        }
        setState([...temp]);
      });

    return () =>
      database().ref(`/UserDataSensors/`).off("value", onValueChange);
  }, [user.id]);

  return (
    <View>
      <LineChart
        data={{
          datasets: [
            {
              data: state,
            },
          ],
        }}
        width={Dimensions?.get("window")?.width - 60}
        height={220}
        yAxisSuffix="  ppm"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#5359D1",
          backgroundGradientTo: "#5359D1",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          useShadowColorFromDataset: true,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#fff",
          },
        }}
        bezier
        style={{
          marginVertical: 30,
          borderRadius: 13,
          marginHorizontal: 25,
        }}
      />

      <View style={style.childContainer}>
        <View>
          <Text style={style.text}>Real Time Reading</Text>
          <Text style={style.text}>{`${state[5] ? state[5] : 100} ppm`}</Text>
        </View>
      </View>
    </View>
  );
};

export default GasChart;
