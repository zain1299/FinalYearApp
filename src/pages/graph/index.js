import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { backImage } from "../../assets";
import { LineChart } from "../../Components";
import style from "./style";

const GraphDetails = ({ route, navigation }) => {
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
        <Text style={style.heading}>{route.params.name}</Text>
      </View>

      <SafeAreaView>
        <View>
          <LineChart />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default GraphDetails;
