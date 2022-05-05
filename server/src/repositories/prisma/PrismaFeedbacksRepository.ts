import { prisma } from "../../prisma";
import { FeedbackCreateData } from "../FeedbackCreateData";
import { FeedbackRepository } from "../FeedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create({ comment, type, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
       type,
       comment,
       screenshot,
      }
    })
  };
}