import { ImageProps, TouchableOpacityProps } from "react-native";

export interface OptionProps extends TouchableOpacityProps {
  image: ImageProps;
  title: string;
}