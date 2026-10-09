import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dancingScript = Dancing_Script({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-handwritten",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Little Universe Called Akhi Dhar ❤️",
  description: "A cinematic, romantic digital scrapbook and tribute dedicated to Akhi Dhar. Celebrating her smile, kindness, grace, and beauty.",
  keywords: ["Akhi Dhar", "Akhi Dhar Universe", "Romantic Tribute", "Digital Love Letter", "Akhi Dhar Photo Gallery"],
  authors: [{ name: "CRP(-2)" }],
  openGraph: {
    title: "A Little Universe Called Akhi Dhar ❤️",
    description: "A cinematic romantic universe dedicated to celebrating Akhi Dhar.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0614",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${dancingScript.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full bg-[#0d0614] text-slate-100 font-sans selection:bg-rose-500/30 selection:text-rose-200">
        {children}
      </body>
    </html>
  );
}
