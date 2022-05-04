import { FeedbackType } from "../../../../utils/feedbackTypes";

export interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}