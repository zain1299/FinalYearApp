import React from "react";
import { Image, Text, View } from "react-native";
import style from "./style";

const CustomCard = ({ title, image, readings }) => {
  return (
    <View style={style.imageChild}>
      <Text style={style.imageText1}>{readings}</Text>
      <Image style={style.images} source={image} />
      <Text style={style.imageText}>{title}</Text>
    </View>
  );
};

export default CustomCard;
