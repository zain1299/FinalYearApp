import React, { useEffect, useState } from "react";
import { Dimensions, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import style from "./style";
import database from "@react-native-firebase/database";

const VoltChart = ({ data }) => {
  const user = useSelector((state) => state?.user);

  const [state, setState] = useState([222]);
  let temp = [];

  useEffect(async () => {
    const onValueChange = database()
      .ref(`/UserDataSensors/`)
      .on("value", (vibration) => {
        temp.push(Math.abs(vibration.val()?.Voltage));
        if (temp?.length > 10) {
          temp.length = 8;
          temp.shift();
        }
        setState([...temp]);
      });

    // Stop listening for updates when no longer required
    return () =>
      database().ref(`/UserDataSensors/`).off("value", onValueChange);
  }, [user.id]);

  return (
    <View>
      <LineChart
        data={{
          // labels: ["Jan", "Feb", "March", "April", "May", "June"],
          datasets: [
            {
              data: state,
            },
          ],
        }}
        width={Dimensions?.get("window")?.width - 60}
        height={220}
        // yAxisLabel=""
        yAxisSuffix=" V"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#5359D1",
          backgroundGradientTo: "#5359D1",
          decimalPlaces: 2, // optional, defaults to 2dp
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
          <Text style={style.text}>Real Time Voltage</Text>
          <Text style={style.text}>{`${state[5] ? state[5] : 227} V`}</Text>
        </View>
      </View>
    </View>
  );
};

export default VoltChart;
