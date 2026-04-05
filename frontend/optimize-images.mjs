import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'src/assets');

const images = [
  { name: 'FONDO.jpg', width: 1200, quality: 75 },
  { name: 'perritos.png', width: 800, quality: 80 },
  { name: 'licha.jpg', width: 600, quality: 80 },
];

const webpImages = [
  'mvp-burgers.webp',
  'barberpay.webp',
  'lupa.webp',
];

async function optimize() {
  console.log('🖼️ Optimizando imágenes...\n');

  for (const img of images) {
    const inputPath = path.join(assetsDir, img.name);
    const outputPath = path.join(assetsDir, img.name.replace(/\.[^.]+$/, '.webp'));

    try {
      await sharp(inputPath)
        .resize(img.width, null, { withoutEnlargement: true })
        .webp({ quality: img.quality })
        .toFile(outputPath);

      const originalSize = (await fs.stat(inputPath)).size;
      const optimizedSize = (await fs.stat(outputPath)).size;

      console.log(`✅ ${img.name}:`);
      console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`   Optimizado: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`   Reducción: ${((1 - optimizedSize / originalSize) * 100).toFixed(1)}%\n`);
    } catch (e) {
      console.log(`⚠️ ${img.name}: ${e.message}`);
    }
  }

  console.log('✨ Optimización completa!');
}

optimize();