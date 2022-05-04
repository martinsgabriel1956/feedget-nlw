import bugImageURL from "../assets/bug.svg";
import ideaImageURL from "../assets/idea.svg";
import thoughtImageURL from "../assets/thought.svg";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    img: {
      source: bugImageURL,
      alt: "Imagem de um inseto"
    }
  },
  IDEA: {
    title: "Ideia",
    img: {
      source: ideaImageURL,
      alt: "Imagem de uma lâmpada "
    }
  },
  OTHER: {
    title: "Outro",
    img: {
      source: thoughtImageURL,
      alt: "Imagem de um balão de pensamento"
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;