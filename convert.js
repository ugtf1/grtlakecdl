import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./images";   // folder with your webp images
const outputDir = "./images-avif";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith(".webp")) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(".webp", ".avif"));

    sharp(inputPath)
      .avif({ quality: 50 })   // adjust quality (lower = smaller file)
      .toFile(outputPath)
      .then(() => console.log(`Converted: ${file} → ${outputPath}`))
      .catch(err => console.error(err));
  }
});
