import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join } from 'path';

const imagesDir = './public/images';

async function convertImages() {
  const files = await readdir(imagesDir);

  // Find large PNG files (> 500KB)
  for (const file of files) {
    if (!file.endsWith('.png')) continue;

    const filePath = join(imagesDir, file);
    const stats = await stat(filePath);
    const sizeKB = stats.size / 1024;

    if (sizeKB > 500) {
      const outputPath = filePath.replace('.png', '.jpeg');
      console.log(`Converting ${file} (${(sizeKB/1024).toFixed(1)}MB) -> JPEG`);

      try {
        await sharp(filePath)
          .jpeg({ quality: 85, mozjpeg: true })
          .toFile(outputPath);

        const newStats = await stat(outputPath);
        const newSizeKB = newStats.size / 1024;
        console.log(`  -> ${(newSizeKB/1024).toFixed(2)}MB (saved ${((sizeKB - newSizeKB)/1024).toFixed(2)}MB)`);

        // Delete the original PNG
        await unlink(filePath);
        console.log(`  -> Deleted original PNG`);
      } catch (err) {
        console.error(`  Error converting ${file}:`, err.message);
      }
    }
  }

  console.log('\nDone!');
}

convertImages();
