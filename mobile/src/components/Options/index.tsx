import React from 'react'
import { Text, View } from 'react-native'

import { Copyright } from '../Copyright';

import { styles } from './styles';
import { FeedbackType, feedbackTypes } from '../../utils/feedbackTypes';

import { Option } from '../Option';
import { OptionsProps } from './types';

const { container, options, title } = styles;

export const Options: React.FC<OptionsProps> = ({ onFeedbackTypeChanged }) => {


  return (
    <View style={container}>
      <Text style={title}>Deixe seu feedback</Text>

      <View style={options}>
        {
          Object.entries(feedbackTypes).map(([key, value]) => (
            <Option 
              key={key} 
              image={value.image} 
              title={value.title} 
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            />
          ))
        }
      </View>
      <Copyright />
    </View>
  )
}