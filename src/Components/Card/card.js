import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "./style";

const HomeCard = ({ title, image, onPress, isActive }) => {
  return (
    <View style={style.homeCard}>
      <TouchableOpacity onPress={onPress}>
        <View style={style.imageContainer}>
          <Text style={style.imageText}>{title}</Text>
        </View>

        <View style={style.imageContainer}>
          <Image style={style.images} source={image} />
          <Text style={style.imageText2}>{isActive}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeCard;
