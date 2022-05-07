import { FeedbackType } from "../../utils/feedbackTypes";

export interface OptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}