

import { transport } from "../../utils/mailtrap-config";
import { SendMailData } from "../SendMailData";

export class NodemailerMailAdapter {
  async sendMail({ subject, body }: SendMailData) {

 await transport.sendMail({
  from: "Gabriel Feedget <hi@feedget.com>",
  to: "Gabriel Martins <martinsgabriel1956@gmail.com>",
  subject,
  html: body,
 })
  }
}