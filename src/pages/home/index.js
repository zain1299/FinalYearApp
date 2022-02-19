import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { LineChart } from "../../Components";

import style from "./style";

const Home = ({ navigation }) => {
  return (
    <View style={style.home}>
      <Text style={style.heading}>Home Appliances Maintenance</Text>
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View>
            <Text style={style.childHeading}>Bezier Line Chart</Text>

            <LineChart />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
