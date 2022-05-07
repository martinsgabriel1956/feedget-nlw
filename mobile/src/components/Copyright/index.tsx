import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles';

const { text } = styles;

export const Copyright = () => {
  return (
    <View>
      <Text style={text}>
        Feito com ♥ pela Rocketseat
      </Text>
    </View>
  )
}