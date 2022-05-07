import express from 'express';

import { SubmitFeedbackUseCase } from './UseCases/SubmitFeedbackUseCase';
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository';
import { NodemailerMailAdapter } from './adapters/nodemailer/NodemailerMailAdapter';

export const routes = express();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerAdapter = new NodemailerMailAdapter()


  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerAdapter);

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })


  return res.status(201).send();
})