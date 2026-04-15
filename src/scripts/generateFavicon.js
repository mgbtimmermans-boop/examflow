const sharp = require('sharp');
const fs = require('fs');

const svgContent = `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="12" fill="#2563EB"/>
  <text x="32" y="44" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle">E</text>
</svg>`;

const svgBuffer = Buffer.from(svgContent);

async function generate() {
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile('public/favicon.png');
  console.log('favicon.png klaar (32x32)');

  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');
  console.log('apple-touch-icon.png klaar (180x180)');

  fs.writeFileSync('public/favicon.svg', svgContent);
  console.log('favicon.svg klaar');
}

generate().catch(console.error);
