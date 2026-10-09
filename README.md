# A Little Universe Called Akhi Dhar ❤️

A world-class, deeply personal, cinematic romantic website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Dedicated to celebrating **Akhi Dhar**.

---

## ✨ Features & Highlights

- 🎬 **Opening Experience**: Full-screen 3-phase cinematic introduction with floating rose petals, glowing heart, and music launch trigger.
- 🖼️ **Hero Section**: Framed portrait of Akhi Dhar with glowing halo, animated light rays, floating petals, and floating action buttons.
- 🌌 **Photo Gallery ("Constellation of Her Moments")**:
  - Category filters (*All, Her Smiles, Quiet Grace, Kept Memories, Favorites*).
  - Masonry grid layout with 3D tilt hover cards and light sweep effects.
  - Fullscreen Lightbox viewer with keyboard navigation (`Left`, `Right`, `Escape`) and mobile touch swipe support.
  - Fullscreen Movie Mode Slideshow with Ken Burns zoom, progress bar, play/pause controls, and tab visibility detection.
- 💬 **Animated Quote Section**: Scroll-triggered word reveals celebrating her smile, kindness, beauty, presence, and uniqueness.
- 💌 **Interactive Love Letter**: Wax seal envelope opening animation, paper unfolding motion, and customizable letter configuration.
- ⏳ **Photo Timeline**: Vertical scrolling timeline with alternating left/right cards and connecting glow line.
- 💖 **Interactive Heart Wall**: Cloud of floating glowing hearts with click popups and particle celebration.
- ✨ **A Little Wish For You**: Night sky interactive wish generator.
- 🎆 **The Final Surprise**: Starry sky scene with pulsing big heart and seamless *Replay the Magic* button.
- 🎵 **Smart Audio Player**: Supports custom MP3 files (`/public/audio/romantic-ambient.mp3`) with an automatic Web Audio API romantic synthesizer fallback.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, laptop, and desktop displays.
- ✍️ **Footer Signature**: *"Made with care, a little imagination, and lots of heart."* • Developed by **CRP(-2)**.

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js 18.x or later
- npm or pnpm / yarn

### Installation

1. Open a terminal in the project folder:
   ```bash
   cd akhi-dhar-universe
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## 📸 Personalizing & Managing Photos

Adding or replacing photographs of Akhi Dhar is simple:

### Step 1: Add Image Files
1. Copy your image files into the public directory:
   ```
   /public/images/akhi/
   ```
2. Recommended filenames: `hero.jpg`, `photo-01.jpg`, `photo-02.jpg`, etc.

### Step 2: Update Photo Configuration
Open `src/data/akhiPhotos.ts` and add or edit photo entries:

```typescript
export const akhiPhotos: PhotoItem[] = [
  {
    id: "photo-01",
    src: "/images/akhi/my-new-photo.jpg",
    alt: "Akhi Dhar smiling",
    caption: "That smile deserves its own sunrise.",
    category: "smiles", // Options: 'smiles' | 'moments' | 'grace' | 'favorites' | 'portrait'
    featured: true,
  },
  // Add as many photos as you like!
];
```

To update the main hero portrait, update `HERO_PHOTO` in `src/data/akhiPhotos.ts`:
```typescript
export const HERO_PHOTO: PhotoItem = {
  id: "hero-photo",
  src: "/images/akhi/hero.jpg",
  alt: "Akhi Dhar portrait",
  // ...
};
```

---

## 💌 Personalizing the Love Letter

To edit the letter text, open `src/data/letterConfig.ts` and update the paragraphs:

```typescript
export const letterConfig: LetterConfig = {
  recipient: "Akhi Dhar",
  salutation: "Dear Akhi,",
  paragraphs: [
    "Your custom message paragraph 1...",
    "Your custom message paragraph 2...",
  ],
  signoff: "With warmth and affection,",
  signature: "Someone who wanted to make something special for you. ❤️"
};
```

---

## 🎵 Adding Background Music

Place your MP3 audio file at:
```
public/audio/romantic-ambient.mp3
```
*Note: If no audio file is provided, the site automatically uses a built-in Web Audio API romantic synthesizer so background music works seamlessly out of the box!*

---

## ☁️ Deploying to Vercel

The application is fully optimized for **Vercel** deployment:

### Option A: Via GitHub (Recommended)
1. Push this repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository.
4. Click **Deploy**. Vercel will automatically build and deploy the Next.js app.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🛠️ Verification & Build Check

To test the production build locally before deploying:

```bash
npm run build
```

This will run TypeScript type checking, Next.js optimization, and generate route types.

---

Made with care, a little imagination, and lots of heart.
Developed by **CRP(-2)**.
# Akhi_D
