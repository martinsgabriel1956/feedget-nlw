import { SendMailData } from "./SendMailData";

export interface MailAdapter {
  sendMail: (data: SendMailData) => Promise<void>
}