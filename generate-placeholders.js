const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'akhi');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const images = [
  { name: 'hero.jpg', title: 'Akhi Dhar', subtitle: 'Hero Photograph' },
  { name: 'photo-01.jpg', title: 'A Radiant Smile', subtitle: 'Photo 01' },
  { name: 'photo-02.jpg', title: 'Quiet Grace', subtitle: 'Photo 02' },
  { name: 'photo-03.jpg', title: 'Gentle Moments', subtitle: 'Photo 03' },
  { name: 'photo-04.jpg', title: 'Unforgettable Look', subtitle: 'Photo 04' },
  { name: 'photo-05.jpg', title: 'Warmth & Sunshine', subtitle: 'Photo 05' },
  { name: 'photo-06.jpg', title: 'Timeless Charm', subtitle: 'Photo 06' },
  { name: 'photo-07.jpg', title: 'Pure Joy', subtitle: 'Photo 07' },
  { name: 'photo-08.jpg', title: 'Reflective Light', subtitle: 'Photo 08' },
  { name: 'photo-09.jpg', title: 'Golden Hour Glow', subtitle: 'Photo 09' },
  { name: 'photo-10.jpg', title: 'Radiant Expression', subtitle: 'Photo 10' },
  { name: 'photo-11.jpg', title: 'Simple Elegance', subtitle: 'Photo 11' },
  { name: 'photo-12.jpg', title: 'Moments Worth Keeping', subtitle: 'Photo 12' }
];

images.forEach((img, idx) => {
  const hues = [340, 320, 280, 15, 330, 290];
  const hue = hues[idx % hues.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="hsl(${hue}, 60%, 12%)"/>
      <stop offset="50%" stop-color="hsl(${(hue + 40) % 360}, 70%, 18%)"/>
      <stop offset="100%" stop-color="hsl(${hue}, 80%, 8%)"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="hsl(${hue}, 90%, 65%)" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="hsl(${hue}, 90%, 65%)" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="1000" fill="url(#bg)"/>
  <circle cx="400" cy="400" r="320" fill="url(#glow)"/>
  <circle cx="400" cy="400" r="180" fill="none" stroke="hsl(${hue}, 80%, 75%)" stroke-width="2" stroke-dasharray="6,6" opacity="0.6"/>
  <g transform="translate(400, 370)">
    <path d="M0 -30 C20 -60 60 -30 0 30 C-60 -30 -20 -60 0 -30 Z" fill="hsl(${hue}, 90%, 70%)" opacity="0.85"/>
  </g>
  <text x="400" y="520" font-family="'Cormorant Garamond', Georgia, serif" font-size="44" font-weight="600" fill="#FFF1F2" text-anchor="middle" letter-spacing="2">${img.title}</text>
  <text x="400" y="570" font-family="system-ui, sans-serif" font-size="20" font-weight="400" fill="hsl(${hue}, 90%, 85%)" text-anchor="middle" opacity="0.8">${img.subtitle}</text>
  <text x="400" y="620" font-family="system-ui, sans-serif" font-size="14" fill="#FDA4AF" text-anchor="middle" opacity="0.7">Replace image in /public/images/akhi/${img.name}</text>
  <circle cx="200" cy="200" r="3" fill="#FFF1F2" opacity="0.8"/>
  <circle cx="620" cy="250" r="2" fill="#FFF1F2" opacity="0.6"/>
  <circle cx="150" cy="750" r="4" fill="#FDE047" opacity="0.7"/>
  <circle cx="680" cy="720" r="3" fill="#FFF1F2" opacity="0.8"/>
</svg>`;

  fs.writeFileSync(path.join(dir, img.name), svg);
});

console.log('Successfully generated placeholder images!');
