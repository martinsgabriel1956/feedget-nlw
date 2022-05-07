import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'

import { styles } from './styles';
import { OptionProps } from './types';


export const Option: React.FC<OptionProps> = ({ image, title, ...rest }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <Image
        source={image}
        style={styles.image}
      />   

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}