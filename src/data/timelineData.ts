export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  caption: string;
  photoSrc: string;
  photoAlt: string;
  tag: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: "timeline-1",
    title: "A Face That Makes Me Smile",
    subtitle: "A moment captured in pure light",
    caption:
      "There are some smiles that instantly brighten up the room. Akhi's smile has always been one of them.",
    photoSrc: "/images/akhi/91998.jpg",
    photoAlt: "Akhi Dhar smiling",
    tag: "Radiance",
  },
  {
    id: "timeline-2",
    title: "The Beauty of the Little Things",
    subtitle: "Quiet grace & warmth",
    caption:
      "It is often in the smallest details—a gentle glance, a kind gesture—that true beauty shows itself.",
    photoSrc: "/images/akhi/92001.jpg",
    photoAlt: "Akhi Dhar graceful photograph",
    tag: "Elegance",
  },
  {
    id: "timeline-3",
    title: "Moments Worth Keeping",
    subtitle: "Timeless snapshots",
    caption:
      "Photographs keep moments alive, but warm memories make them unforgettable.",
    photoSrc: "/images/akhi/92005.jpg",
    photoAlt: "Akhi Dhar candid moment",
    tag: "Memories",
  },
  {
    id: "timeline-4",
    title: "A Smile to Remember",
    subtitle: "Sunlight on a cloudy day",
    caption:
      "Proof that true beauty doesn't demand attention; it simply draws the heart toward it.",
    photoSrc: "/images/akhi/92010.jpg",
    photoAlt: "Akhi Dhar warm smile",
    tag: "Warmth",
  },
  {
    id: "timeline-5",
    title: "Simply, Akhi",
    subtitle: "Wonderfully, genuinely herself",
    caption:
      "No need to pretend or prove anything. Being Akhi Dhar is already more than enough.",
    photoSrc: "/images/akhi/91997.jpg",
    photoAlt: "Akhi Dhar portrait",
    tag: "Uniqueness",
  },
];
