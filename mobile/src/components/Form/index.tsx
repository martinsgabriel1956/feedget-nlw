import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';

import { styles } from './styles';
import { theme } from "../../theme";
import { FormProps } from "./types";

import { feedbackTypes } from "../../utils/feedbackTypes";

import { ScreenshotButton } from "../ScreenshotButton";
import { Button } from "../Button";
import { Copyright } from "../Copyright";
import { api } from "../../services/api";

const { container, header, titleContainer, titleText, image, input, footer } = styles;

export const Form: React.FC<FormProps> = ({ feedbackType, onFeedbackCanceled, onFeedbackSent }) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleScreenshot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    }).then(uri => setScreenshot(uri))
      .catch(err => console.log(err))
  }
 
  const handleScreenshotRemove = () => {
    setScreenshot(null);  
  }

  const handleSendFeedback = async () => {
    if(isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64'});

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment,
      })

      onFeedbackSent();

      console.log(onFeedbackSent)
    } catch(err) {
      console.log(err);
      setIsSendingFeedback(false);
    }
  }

  console.log(isSendingFeedback)

  return (
    <View style={container}>
      <View style={header}>
        <TouchableOpacity 
          onPress={onFeedbackCanceled}
        >
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={titleContainer}>
          <Image 
            source={feedbackTypeInfo.image} 
            style={image}
          />
          <Text style={titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setComment}
      />

      <View 
        style={footer}
      >
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button 
          onPress={handleSendFeedback}
          isLoading={isSendingFeedback} 
        />
      </View>
      <Copyright />
    </View>
  );
}

