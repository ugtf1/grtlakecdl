import sharp from "sharp";
import fs from "fs";

const inputDir = "src/assets";
const outputDir = "optimized";

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith(".webp")) {
    // Generate multiple sizes with stronger compression
    [480, 768, 1200].forEach(size => {
      sharp(`${inputDir}/${file}`)
        .resize(size) // resize to target width
        .webp({ quality: 5 }) // lower quality = smaller file size
        .toFile(`${outputDir}/${file.replace(".webp", `-${size}.webp`)}`, (err) => {
          if (err) console.error(err);
          else console.log(`Optimized ${file} at ${size}px`);
        });
    });
  }
});
