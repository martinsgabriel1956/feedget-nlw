import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import { styles } from './styles';
import { theme } from "../../theme";
import { ButtonProps } from "./types";

const { container, title } = styles;

export const Button: React.FC<ButtonProps> = ({ isLoading, ...rest }) => {
  return (
    <TouchableOpacity style={container} {...rest}>
      {isLoading 
        ? 
          <ActivityIndicator color={theme.colors.text_on_brand_color} /> 
        : 
          <Text style={title}>Enviar feedback</Text>
      }
    </TouchableOpacity>
  );
}