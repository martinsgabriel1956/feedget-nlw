import { FeedbackType } from "../../utils/feedbackTypes";

export interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}