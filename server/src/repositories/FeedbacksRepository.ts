import { FeedbackCreateData } from "./FeedbackCreateData";

export interface FeedbackRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}