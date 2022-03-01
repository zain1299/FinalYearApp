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
  GasChart,
  Power,
} from "../../Components";
import style from "./style";

const GraphDetails = ({ route, navigation }) => {
  let name = route.params.name;

  return (
    <ScrollView>
      <View style={style.menuContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate("GeneratorDetalis");
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
      ) : name === "Frequency" ? (
        <SafeAreaView>
          <View>
            <EMI />
          </View>
        </SafeAreaView>
      ) : name === "Gas" ? (
        <SafeAreaView>
          <View>
            <GasChart />
          </View>
        </SafeAreaView>
      ) : name === "Power" ? (
        <SafeAreaView>
          <View>
            <Power />
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
