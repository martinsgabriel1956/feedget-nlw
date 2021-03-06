import { FeedbackType, feedbackTypes } from "../../../../utils/feedbackTypes";

import { CloseButton } from "../../../CloseButton";

import { FeedbackTypeStepProps } from "./types";

export const FeedbackTypeStep: React.FC<FeedbackTypeStepProps> = ({ onFeedbackTypeChanged }) => {
  return (
    <>
      <header>
          <span className="text-xl loading-6">Deixe seu feedback</span>
          <CloseButton />
        </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.img.source} alt={value.img.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  );
}


