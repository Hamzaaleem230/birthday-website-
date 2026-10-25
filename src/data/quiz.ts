export interface BilingualQuestion {
  id: number;
  question: { en: string; ur: string };
  options: { en: string[]; ur: string[] };
}

export const questions: BilingualQuestion[] = [
  {
    id: 1,
    question: { en: "If we head out together, what kind of mission might it become?", ur: "Agar hum saath niklen, toh kis tarah ka mission ho sakta hai?" },
    options: {
      en: ["A cycling adventure", "A food hunt", "Both, because why not?"],
      ur: ["Cycling adventure", "Khane ki talash", "Dono, kyun nahi?"]
    }
  },
  {
    id: 2,
    question: { en: "What is most likely to happen during a food trip?", ur: "Food trip ke dauran sab se zyada kya hone ka imkaan hai?" },
    options: {
      en: ["We discover something tasty", "We start another random conversation", "Both"],
      ur: ["Hum kuch mazedaar dhoond lenge", "Koi random baat shuru ho jayegi", "Dono"]
    }
  },
  {
    id: 3,
    question: { en: "Which activity belongs in our shared memories?", ur: "Kaunsi activity humari shared yaadon mein shamil hai?" },
    options: {
      en: ["Gaming together", "Making TikToks", "Both"],
      ur: ["Gaming", "TikToks banana", "Dono"]
    }
  },
  {
    id: 4,
    question: { en: "What could turn an ordinary moment into a memorable one?", ur: "Kya cheez ek aam pal ko yaadgar bana sakti hai?" },
    options: {
      en: ["A random joke", "A spontaneous plan", "Either one"],
      ur: ["Koi random joke", "Koi spontanoeus plan", "Dono"]
    }
  },
  {
    id: 5,
    question: { en: "What brings out our competitive side?", ur: "Humara competitive side kya bahar lata hai?" },
    options: {
      en: ["Games", "Antakshari", "Both"],
      ur: ["Games", "Antakshari", "Dono"]
    }
  },
  {
    id: 6,
    question: { en: "What is the best part of all these memories?", ur: "In sab yaadon ka sab se behtareen hissa kya hai?" },
    options: {
      en: ["The activity itself", "The laughs and company", "Both, but the people make it special"],
      ur: ["Activity khud", "Hansi aur company", "Dono, lekin log isay special banate hain"]
    }
  }
];
