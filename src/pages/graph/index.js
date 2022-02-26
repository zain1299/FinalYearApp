import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { LineChart } from "../../Components";
import style from "./style";

const GraphDetails = ({ navigation }) => {
  return (
    <ScrollView>
      <Text style={style.heading}>Graph</Text>
      <SafeAreaView>
        <View>
          <LineChart />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default GraphDetails;
