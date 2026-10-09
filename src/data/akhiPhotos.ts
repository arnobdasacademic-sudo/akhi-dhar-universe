export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  date?: string;
  category: "smiles" | "moments" | "grace" | "favorites" | "portrait";
  featured?: boolean;
  aspectRatio?: "portrait" | "landscape" | "square";
}

/**
 * CENTRAL PHOTO CONFIGURATION FILE FOR AKHI DHAR
 *
 * Photos are located in: /public/images/akhi/
 * Actual uploaded files: 91997.jpg – 92014.jpg (18 photos)
 */
export const HERO_PHOTO: PhotoItem = {
  id: "hero-photo",
  src: "/images/akhi/91997.jpg",
  alt: "Akhi Dhar portrait",
  caption: "Your smile has a way of making ordinary moments feel extraordinary.",
  category: "portrait",
  featured: true,
  aspectRatio: "portrait",
};

export const akhiPhotos: PhotoItem[] = [
  HERO_PHOTO,
  {
    id: "photo-01",
    src: "/images/akhi/91998.jpg",
    alt: "Akhi Dhar smiling brightly",
    caption: "That smile deserves its own sunrise.",
    category: "smiles",
    featured: true,
    aspectRatio: "portrait",
  },
  {
    id: "photo-02",
    src: "/images/akhi/91999.jpg",
    alt: "Akhi Dhar graceful moment",
    caption: "A little moment, a beautiful memory.",
    category: "grace",
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "photo-03",
    src: "/images/akhi/92000.jpg",
    alt: "Akhi Dhar gentle look",
    caption: "Some photographs hold more warmth than words ever could.",
    category: "moments",
    featured: false,
    aspectRatio: "portrait",
  },
  {
    id: "photo-04",
    src: "/images/akhi/92001.jpg",
    alt: "Akhi Dhar candid portrait",
    caption: "Proof that beauty can be quiet, gentle, and completely unforgettable.",
    category: "favorites",
    featured: true,
    aspectRatio: "square",
  },
  {
    id: "photo-05",
    src: "/images/akhi/92002.jpg",
    alt: "Akhi Dhar warm smile",
    caption: "Every picture tells a story, but some make the heart pause.",
    category: "smiles",
    featured: false,
    aspectRatio: "portrait",
  },
  {
    id: "photo-06",
    src: "/images/akhi/92003.jpg",
    alt: "Akhi Dhar elegant look",
    caption: "Grace is not something you acquire; it's how you walk through life.",
    category: "grace",
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "photo-07",
    src: "/images/akhi/92004.jpg",
    alt: "Akhi Dhar joyful laugh",
    caption: "If happiness had a favorite expression, it would look like your laugh.",
    category: "smiles",
    featured: false,
    aspectRatio: "square",
  },
  {
    id: "photo-08",
    src: "/images/akhi/92005.jpg",
    alt: "Akhi Dhar reflective moment",
    caption: "Soft light, gentle thoughts, and timeless beauty.",
    category: "moments",
    featured: true,
    aspectRatio: "portrait",
  },
  {
    id: "photo-09",
    src: "/images/akhi/92006.jpg",
    alt: "Akhi Dhar golden hour photo",
    caption: "Caught in the warm glow of an unforgettable afternoon.",
    category: "favorites",
    featured: false,
    aspectRatio: "landscape",
  },
  {
    id: "photo-10",
    src: "/images/akhi/92007.jpg",
    alt: "Akhi Dhar radiant expression",
    caption: "The world feels a little kinder whenever you smile.",
    category: "smiles",
    featured: true,
    aspectRatio: "portrait",
  },
  {
    id: "photo-11",
    src: "/images/akhi/92008.jpg",
    alt: "Akhi Dhar quiet elegance",
    caption: "Simplicity and elegance in perfect harmony.",
    category: "grace",
    featured: false,
    aspectRatio: "portrait",
  },
  {
    id: "photo-12",
    src: "/images/akhi/92009.jpg",
    alt: "Akhi Dhar cherishable moment",
    caption: "Little moments that turn into forever memories.",
    category: "moments",
    featured: true,
    aspectRatio: "square",
  },
  {
    id: "photo-13",
    src: "/images/akhi/92010.jpg",
    alt: "Akhi Dhar beautiful glance",
    caption: "A glance like yours makes the whole world stop and stare.",
    category: "favorites",
    featured: true,
    aspectRatio: "portrait",
  },
  {
    id: "photo-14",
    src: "/images/akhi/92011.jpg",
    alt: "Akhi Dhar sparkling eyes",
    caption: "There is an entire universe hiding in your eyes.",
    category: "grace",
    featured: false,
    aspectRatio: "landscape",
  },
  {
    id: "photo-15",
    src: "/images/akhi/92012.jpg",
    alt: "Akhi Dhar serene moment",
    caption: "In the quiet, she is the most beautiful thing in the room.",
    category: "moments",
    featured: false,
    aspectRatio: "portrait",
  },
  {
    id: "photo-16",
    src: "/images/akhi/92013.jpg",
    alt: "Akhi Dhar joyful portrait",
    caption: "Joy looks so natural on you — like it was made just for your face.",
    category: "smiles",
    featured: true,
    aspectRatio: "square",
  },
  {
    id: "photo-17",
    src: "/images/akhi/92014.jpg",
    alt: "Akhi Dhar final portrait",
    caption: "Some people leave a mark on the world just by existing. You are one of them.",
    category: "favorites",
    featured: true,
    aspectRatio: "portrait",
  },
];
