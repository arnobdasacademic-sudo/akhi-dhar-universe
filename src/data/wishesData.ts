export interface WishItem {
  id: string;
  wish: string;
  theme: string;
}

export const defaultWishes: WishItem[] = [
  {
    id: "wish-01",
    wish: "May your smile always find a reason to return.",
    theme: "Joy & Brightness",
  },
  {
    id: "wish-02",
    wish: "May your kindness come back to you in beautiful ways.",
    theme: "Karma & Light",
  },
  {
    id: "wish-03",
    wish: "May your dreams grow bigger than your fears.",
    theme: "Courage & Hope",
  },
  {
    id: "wish-04",
    wish: "May you find people who appreciate your heart as much as your presence.",
    theme: "Warmth & Belonging",
  },
  {
    id: "wish-05",
    wish: "May life surprise you with moments that feel like little miracles.",
    theme: "Wonder & Magic",
  },
  {
    id: "wish-06",
    wish: "And may you never forget that you are worthy of happiness, respect, and genuine care.",
    theme: "Peace & Worth",
  },
  {
    id: "wish-07",
    wish: "May quiet evenings bring you comfort and peaceful rest.",
    theme: "Serenity",
  },
  {
    id: "wish-08",
    wish: "May every morning remind you of how uniquely bright you make the world.",
    theme: "New Beginnings",
  },
  {
    id: "wish-09",
    wish: "May laughter find you easily, even on the busiest of days.",
    theme: "Spontaneity",
  },
  {
    id: "wish-10",
    wish: "May you always walk with confidence, knowing how deeply appreciated you are.",
    theme: "Strength & Grace",
  }
];

export function getRandomWish(currentWishId?: string): WishItem {
  const available = defaultWishes.filter((w) => w.id !== currentWishId);
  const randomIndex = Math.floor(Math.random() * available.length);
  return available[randomIndex] || defaultWishes[0];
}
