import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";

import { api } from "../../../../services/api";
import { feedbackTypes } from "../../../../utils/feedbackTypes";

import { CloseButton } from "../../../CloseButton";
import { Loading } from "../../../Loading";
import { ScreenshotButton } from "../../../ScreenshotButton";

import { FeedbackContentStepProps } from "./types";

export const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({ feedbackType, onFeedbackRestartRequested, onFeedbackSend }) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);
  const [comment, setComment] = useState('');
  
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleSubmitFeedback = async (event: FormEvent) => {
    event.preventDefault();

    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    })

    setIsSendingFeedback(false);
    onFeedbackSend();
  }
    return (
    <>
      <header>
        <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" onClick={onFeedbackRestartRequested}>
          <ArrowLeft width="bold" className="h-4 w-4" />
        </button>

        <span className="text-xl loading-6 flex items-center gap-2">
          <img className="w-6 h-6" src={feedbackTypeInfo.img.source} alt={feedbackTypeInfo.img.alt} />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback}  action="" className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none scrollbar-thumb-zinc-700 resize-none scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={event => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">

          <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={comment.length === 0 || isSendingFeedback} 

          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}


