export interface LetterConfig {
  recipient: string;
  salutation: string;
  paragraphs: string[];
  signoff: string;
  signature: string;
}

export const letterConfig: LetterConfig = {
  recipient: "Akhi Dhar",
  salutation: "Dear Akhi,",
  paragraphs: [
    "I wanted to make something that could hold a little of what words sometimes struggle to explain.",
    "There is something genuinely lovely about you. Your smile can brighten a moment, your kindness can make someone feel comfortable, and your presence can turn an ordinary day into something worth remembering.",
    "What makes you special is not simply how beautiful you are, but also the little things that make you who you are: your warmth, your individuality, and the feeling that the world has something softer to offer.",
    "I hope you never forget how much beauty you carry, even on the days when you do not feel it yourself.",
    "This little corner of the internet is filled with photographs, words, and tiny details chosen with you in mind. It is my way of saying that you deserve to be appreciated, celebrated, and reminded of the lovely person you are.",
    "So whenever you visit this little universe, I hope it gives you a reason to smile."
  ],
  signoff: "With warmth and affection,",
  signature: "Someone who wanted to make something special for you. ❤️"
};
