import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'src/assets');
const imgsDir = path.join(assetsDir, 'imgs');
const logosDir = path.join(assetsDir, 'logos');
const portfolioDir = path.join(assetsDir, 'portfolio');

const images = [
  { dir: logosDir, name: 'logo-lupa.png', width: 800, quality: 80 },
  { dir: logosDir, name: 'logo-mvp-burgers.png', width: 800, quality: 80 },
  { dir: imgsDir, name: 'lupa-img-1.png', width: 600, quality: 80 },
  { dir: imgsDir, name: 'lupa-img-2.png', width: 600, quality: 80 },
  { dir: imgsDir, name: 'lupa-img-3.png', width: 600, quality: 80 },
  { dir: imgsDir, name: 'mvp-img-1.png', width: 600, quality: 80 },
  { dir: imgsDir, name: 'mvp-img-2.png', width: 600, quality: 80 },
];

async function optimize() {
  console.log('🖼️ Optimizando imágenes restantes...\n');
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const img of images) {
    const inputPath = path.join(img.dir, img.name);
    const outputPath = path.join(img.dir, img.name.replace(/\.[^.]+$/, '.webp'));

    try {
      await sharp(inputPath)
        .resize(img.width, null, { withoutEnlargement: true })
        .webp({ quality: img.quality })
        .toFile(outputPath);

      const originalSize = (await fs.stat(inputPath)).size;
      const optimizedSize = (await fs.stat(outputPath)).size;
      totalOriginal += originalSize;
      totalOptimized += optimizedSize;

      console.log(`✅ ${img.name}:`);
      console.log(`   ${(originalSize / 1024).toFixed(0)} KB → ${(optimizedSize / 1024).toFixed(0)} KB (${((1 - optimizedSize / originalSize) * 100).toFixed(0)}%)`);
    } catch (e) {
      console.log(`⚠️ ${img.name}: ${e.message}`);
    }
  }

  console.log(`\n✨ Total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Reducción: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
}

optimize();