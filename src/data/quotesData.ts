export interface QuoteItem {
  id: string;
  category: "smile" | "kindness" | "beauty" | "presence" | "uniqueness";
  categoryTitle: string;
  categoryIconName: string;
  quote: string;
  author: string;
}

export const quotesData: QuoteItem[] = [
  // About her smile
  {
    id: "quote-smile-1",
    category: "smile",
    categoryTitle: "About Her Smile",
    categoryIconName: "Sun",
    quote: "Akhi, your smile is the kind of sunshine that finds its way into a cloudy day without asking permission.",
    author: "Akhi Dhar Universe",
  },
  {
    id: "quote-smile-2",
    category: "smile",
    categoryTitle: "About Her Smile",
    categoryIconName: "Sun",
    quote: "Some smiles are beautiful to look at. Yours is beautiful to remember.",
    author: "Akhi Dhar Universe",
  },
  {
    id: "quote-smile-3",
    category: "smile",
    categoryTitle: "About Her Smile",
    categoryIconName: "Sun",
    quote: "If happiness had a favorite expression, I think it would look a little like your smile.",
    author: "Akhi Dhar Universe",
  },

  // About her kindness
  {
    id: "quote-kindness-1",
    category: "kindness",
    categoryTitle: "About Her Kindness",
    categoryIconName: "Heart",
    quote: "Your kindness is a quiet kind of magic. It makes people feel seen, welcomed, and a little less alone.",
    author: "Akhi Dhar Universe",
  },
  {
    id: "quote-kindness-2",
    category: "kindness",
    categoryTitle: "About Her Kindness",
    categoryIconName: "Heart",
    quote: "The most beautiful thing about a kind heart is that its warmth reaches places beauty alone never could.",
    author: "Akhi Dhar Universe",
  },
  {
    id: "quote-kindness-3",
    category: "kindness",
    categoryTitle: "About Her Kindness",
    categoryIconName: "Heart",
    quote: "You have a way of making little things feel meaningful and ordinary moments feel warm.",
    author: "Akhi Dhar Universe",
  },

  // About her beauty
  {
    id: "quote-beauty-1",
    category: "beauty",
    categoryTitle: "About Her Beauty",
    categoryIconName: "Sparkles",
    quote: "Your beauty is not just in the way you look; it is in the warmth, grace, and gentleness you bring into the world.",
    author: "Akhi Dhar Universe",
  },
  {
    id: "quote-beauty-2",
    category: "beauty",
    categoryTitle: "About Her Beauty",
    categoryIconName: "Sparkles",
    quote: "There is something lovely about the way you exist without needing to prove that you are special.",
    author: "Akhi Dhar Universe",
  },
  {
    id: "quote-beauty-3",
    category: "beauty",
    categoryTitle: "About Her Beauty",
    categoryIconName: "Sparkles",
    quote: "Flowers are beautiful, sunsets are beautiful, and then there is the kind of beauty that makes you stop comparing.",
    author: "Akhi Dhar Universe",
  },

  // About her presence
  {
    id: "quote-presence-1",
    category: "presence",
    categoryTitle: "About Her Presence",
    categoryIconName: "MoonStar",
    quote: "Some people enter a room. Others quietly make it feel brighter. You have always reminded me of the second kind.",
    author: "Akhi Dhar Universe",
  },
  {
    id: "quote-presence-2",
    category: "presence",
    categoryTitle: "About Her Presence",
    categoryIconName: "MoonStar",
    quote: "If a thousand little moments could explain why someone is special, I would still need one more to explain you.",
    author: "Akhi Dhar Universe",
  },
  {
    id: "quote-presence-3",
    category: "presence",
    categoryTitle: "About Her Presence",
    categoryIconName: "MoonStar",
    quote: "You make ordinary memories feel like the kind we would wish we could revisit.",
    author: "Akhi Dhar Universe",
  },

  // About her uniqueness
  {
    id: "quote-uniqueness-1",
    category: "uniqueness",
    categoryTitle: "About Her Uniqueness",
    categoryIconName: "Gem",
    quote: "There will always be beautiful people in the world, Akhi, but there will never be another person who is exactly you.",
    author: "Akhi Dhar Universe",
  },
  {
    id: "quote-uniqueness-2",
    category: "uniqueness",
    categoryTitle: "About Her Uniqueness",
    categoryIconName: "Gem",
    quote: "You do not have to be perfect to be precious. Being wonderfully, genuinely yourself is already something beautiful.",
    author: "Akhi Dhar Universe",
  },
  {
    id: "quote-uniqueness-3",
    category: "uniqueness",
    categoryTitle: "About Her Uniqueness",
    categoryIconName: "Gem",
    quote: "Never underestimate the light you carry simply by being the person you are.",
    author: "Akhi Dhar Universe",
  },
];
