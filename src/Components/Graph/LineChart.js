import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import database from "@react-native-firebase/database";

const CustomLineChart = ({ data }) => {
  const user = useSelector((state) => state.user);

  const [state, setState] = useState([222]);

  // useEffect(async () => {
  //   const onValueChange = database()
  //     .ref(`/UsersData/${user.id}`)
  //     .on("value", (snapshot) => {
  //       let data = [...state];
  //       if (state.length < 15) {
  //         data.push(snapshot.val().test.Voltage);
  //         setState(data);
  //       } else {
  //         data?.shift();
  //         setState(data);
  //       }
  //     });

  //   // Stop listening for updates when no longer required
  //   return () =>
  //     database().ref(`/UsersData/${user.id}`).off("value", onValueChange);
  // }, [user.id]);

  // console.log("state", state.length);

  return (
    <View>
      <LineChart
        data={{
          // labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: state,
            },
          ],
        }}
        width={Dimensions.get("window").width - 60}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          // backgroundColor: "#e26a00",
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
    </View>
  );
};

export default CustomLineChart;
