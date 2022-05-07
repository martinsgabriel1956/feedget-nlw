import React from "react";
import { TouchableOpacity, View, Image } from 'react-native';
import { Camera, Trash } from "phosphor-react-native";


import { styles } from './styles';
import { ScreenshotButtonProps } from "./types";
import { theme } from "../../theme";

const { container, removeIcon, image } = styles;

export const ScreenshotButton: React.FC<ScreenshotButtonProps> = ({
  screenshot,
  onTakeShot,
  onRemoveShot
}) => {
  return (
    <TouchableOpacity
      style={container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot
          ?
          <View>
            <Image 
              source={{ uri: screenshot }}
              style={image}
            />
            <Trash
              size={24}
              color={theme.colors.text_secondary}
              weight="fill"
              style={removeIcon}
            />
          </View>
          :
          <Camera
            size={22}
            color={theme.colors.text_primary}
            weight="bold"
          />
      }

    </TouchableOpacity>
  );
}