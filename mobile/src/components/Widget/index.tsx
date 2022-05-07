import { ChatTeardropDots } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { theme } from '../../theme';
import { useRef, useState } from 'react';

import { styles } from './styles';

import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';
import { FeedbackType } from '../../utils/feedbackTypes';

const { button, modal, indicator } = styles;

const Widget: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  }

  const handleRestartFeedback = () => {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  const handleFeedbackSent = () => {
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity
        style={button}
        onPress={handleOpen}
      >
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight={'bold'}
        />

      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={modal}
        handleIndicatorStyle={indicator}
      >
        {
          feedbackSent
            ? 
              <Success 
                onSendAnotherFeedback={handleRestartFeedback}
              />
            :
              <>
                {
                  feedbackType
                    ?
                    <Form 
                      feedbackType={feedbackType} 
                      onFeedbackCanceled={handleRestartFeedback}
                      onFeedbackSent={handleFeedbackSent}
                    />
                    :
                    <Options
                      onFeedbackTypeChanged={setFeedbackType}
                    />
                }
              </>
        }
      </BottomSheet>
    </>
  );
};


export default gestureHandlerRootHOC(Widget);