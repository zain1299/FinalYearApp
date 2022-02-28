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
import {
  CurrentChart,
  TempLineChart,
  VibrationChart,
  VoltChart,
  EMI,
} from "../../Components";
import style from "./style";

const GraphDetails = ({ route, navigation }) => {
  let name = route.params.name;

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
        <Text style={style.heading}>{route?.params?.name}</Text>
      </View>

      {name === "Vibration" ? (
        <SafeAreaView>
          <View>
            <VibrationChart />
          </View>
        </SafeAreaView>
      ) : name === "Current" ? (
        <SafeAreaView>
          <View>
            <CurrentChart />
          </View>
        </SafeAreaView>
      ) : name === "Volt" ? (
        <SafeAreaView>
          <View>
            <VoltChart />
          </View>
        </SafeAreaView>
      ) : name === "Electro Magnetic" ? (
        <SafeAreaView>
          <View>
            <EMI />
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <View>
            <TempLineChart />
          </View>
        </SafeAreaView>
      )}
    </ScrollView>
  );
};

export default GraphDetails;
