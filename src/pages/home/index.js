import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { generatorImage, menuImage, motorImage } from "../../assets";
import { Cards } from "../../Components";
import style from "./style";

const Home = ({ navigation }) => {
  return (
    <View style={style.home}>
      <View style={style.menuContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Image style={style.menu} source={menuImage} />
        </TouchableOpacity>
        <Text style={style.heading}>Home Appliances Maintenance</Text>
      </View>
      <ScrollView>
        <SafeAreaView>
          <View style={style.imageContainer}>
            <Cards
              title="Generator"
              image={generatorImage}
              isActive={"Active"}
              onPress={() => {
                navigation.navigate("GeneratorDetalis");
              }}
            />

            <Cards
              title="Motor"
              image={motorImage}
              isActive={"Inactive"}
              onPress={() => Alert.alert("Device is not Active")}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Home;
