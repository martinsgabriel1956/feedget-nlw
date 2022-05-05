import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  {create: createFeedbackSpy},
  {sendMail: sendMailSpy}
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64,fdbbsafybysdfb'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })
  
  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64,fdbbsafybysdfb'
    })).rejects.toThrow()
  })
  
  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,fdbbsafybysdfb'
    })).rejects.toThrow()
  })
  
  it('should not be able to submit a feedback with a screenshot invalid', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'This is a bug',
      screenshot: 'fdbbsafybysdfb'
    })).rejects.toThrow()
  })

  
})