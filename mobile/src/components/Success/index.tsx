import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import imgSuccess from '../../assets/success.png';
import { Copyright } from "../Copyright";
import { SuccessProps } from "./types";

const { container, image, title, buttonTitle, button } = styles;

export const Success: React.FC<SuccessProps> = ({ onSendAnotherFeedback }) => {
  return (
    <View style={container}>
      <Image 
        source={imgSuccess}
        style={image}
      />

      <Text style={title}>
        Agradecemos o feedback
      </Text>

      <TouchableOpacity 
        style={button}
        onPress={onSendAnotherFeedback}
      >
        <Text style={buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}

