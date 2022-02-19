import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "./style";

const CustomCard = ({ title, image, readings, onPress }) => {
  return (
    <View style={style.imageChild}>
      <TouchableOpacity onPress={onPress}>
        {readings && <Text style={style.imageText1}>{readings}</Text>}
        <Image style={style.images} source={image} />
        <Text style={style.imageText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCard;
