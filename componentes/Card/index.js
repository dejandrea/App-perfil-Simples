import React from "react";
import { View, Text } from "react-native";

import style from "./style";

export default function Card({titulo,children}){
    return(
    <View style={style.card}>
        <View style={style.card_header}>
          <Text>{titulo}</Text>
        </View>
        <View style={style.card_content}>
          {children}
        </View>
    </View>

    )
}