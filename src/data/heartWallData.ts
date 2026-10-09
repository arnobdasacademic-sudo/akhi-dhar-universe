export interface HeartItem {
  id: string;
  title: string;
  message: string;
  color: string;
  glowColor: string;
  size: "sm" | "md" | "lg";
}

export const heartWallMessages: HeartItem[] = [
  {
    id: "heart-1",
    title: "A Gentle Reminder",
    message: "Your smile is a lovely reminder that little things can mean a lot.",
    color: "from-rose-400 to-pink-600",
    glowColor: "rgba(244, 114, 182, 0.5)",
    size: "lg",
  },
  {
    id: "heart-2",
    title: "Pure Kindness",
    message: "Your kindness is a beautiful part of who you are.",
    color: "from-pink-400 to-rose-500",
    glowColor: "rgba(251, 113, 133, 0.5)",
    size: "md",
  },
  {
    id: "heart-3",
    title: "Self-Care & Grace",
    message: "You deserve the same gentleness you offer others.",
    color: "from-amber-300 to-rose-400",
    glowColor: "rgba(253, 224, 71, 0.5)",
    size: "lg",
  },
  {
    id: "heart-4",
    title: "Joy & Laughter",
    message: "May you always find reasons to laugh freely.",
    color: "from-fuchsia-400 to-pink-600",
    glowColor: "rgba(232, 121, 249, 0.5)",
    size: "sm",
  },
  {
    id: "heart-5",
    title: "Uniquely You",
    message: "Keep being the wonderful person that makes you uniquely you.",
    color: "from-rose-500 to-purple-600",
    glowColor: "rgba(244, 63, 94, 0.5)",
    size: "lg",
  },
  {
    id: "heart-6",
    title: "Your Impact",
    message: "Never forget that your presence can make a difference.",
    color: "from-pink-300 to-rose-400",
    glowColor: "rgba(244, 114, 182, 0.5)",
    size: "md",
  },
  {
    id: "heart-7",
    title: "Countless Smiles",
    message: "May life give you countless reasons to smile.",
    color: "from-amber-200 to-pink-500",
    glowColor: "rgba(252, 211, 77, 0.5)",
    size: "sm",
  },
  {
    id: "heart-8",
    title: "Celebrate Yourself",
    message: "Your individuality is something worth celebrating.",
    color: "from-purple-400 to-pink-500",
    glowColor: "rgba(192, 132, 252, 0.5)",
    size: "lg",
  },
  {
    id: "heart-9",
    title: "Warmth & Light",
    message: "Thank you for bringing so much gentle light wherever you go.",
    color: "from-rose-400 to-amber-300",
    glowColor: "rgba(251, 113, 133, 0.5)",
    size: "md",
  },
  {
    id: "heart-10",
    title: "A Special Place",
    message: "This little universe is proof of how much you are thought of.",
    color: "from-pink-500 to-rose-600",
    glowColor: "rgba(244, 114, 182, 0.5)",
    size: "sm",
  },
];
