const sharp = require('sharp');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#2563EB"/>
  <text x="16" y="22" font-family="system-ui" font-size="18" font-weight="700" fill="white" text-anchor="middle">E</text>
</svg>`;

sharp(Buffer.from(svg)).resize(32, 32).png().toFile('public/favicon.png', (err) => {
  if (err) console.error(err);
  else console.log('favicon.png aangemaakt');
});

sharp(Buffer.from(svg)).resize(180, 180).png().toFile('public/apple-touch-icon.png', (err) => {
  if (err) console.error(err);
  else console.log('apple-touch-icon.png aangemaakt');
});
