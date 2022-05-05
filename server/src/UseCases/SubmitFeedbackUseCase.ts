import { MailAdapter } from "../adapters/MailAdapter";
import { FeedbackRepository } from "../repositories/FeedbacksRepository";
import { SubmitFeedbackUseCaseRequest } from "./SubmitFeedbackUseCaseRequest";

export class SubmitFeedbackUseCase {
  constructor(
   private feedbackRepository: FeedbackRepository,
   private mailAdapter: MailAdapter
  ) {

  }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { comment, type, screenshot } = request;

    if(!type) {
      throw new Error('Type is required');
    }
    
    if(!comment) {
      throw new Error('Comment is required');
    }

    if(screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format');
    }

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px color: #111;">`,
          `<p>Tipo do feedback: ${type}</p>`,
          `<p>Comentário: ${comment}</p>`,
        `</div>`
      ].join('')
    })
  }
}