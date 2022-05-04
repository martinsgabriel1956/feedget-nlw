import { useState } from "react";
import { FeedbackType, feedbackTypes } from "../../utils/feedbackTypes";

import { CloseButton } from "../CloseButton";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import { FeedbackTypeStepProps } from "./Steps/FeedbackTypeStep/types";

export const WidgetForm: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackType(null);
    setFeedbackSend(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSend ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep onFeedbackRestartRequested={handleRestartFeedback} feedbackType={feedbackType} onFeedbackSend={() => setFeedbackSend(true)} />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela Rocketseat
      </footer>
    </div>
  );
}