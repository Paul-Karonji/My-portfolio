import { removeBackground } from "@imgly/background-removal-node";
import fs from "fs";
import path from "path";

async function main() {
  const inputPath = "C:/Users/paul/Documents/Wik/portfolio/public/images/hero-portrait.webp";
  const outputPath = "C:/Users/paul/Documents/Wik/portfolio/public/images/hero-cutout.png";

  console.log("Reading input image:", inputPath);
  const fileBuffer = fs.readFileSync(inputPath);
  const blob = new Blob([fileBuffer], { type: "image/webp" });

  console.log("Removing background with ONNX model...");
  const resultBlob = await removeBackground(blob, {
    output: {
      format: "image/png",
      quality: 0.95
    }
  });

  const arrayBuffer = await resultBlob.arrayBuffer();
  fs.writeFileSync(outputPath, Buffer.from(arrayBuffer));
  console.log("Successfully saved transparent cutout to:", outputPath);
}

main().catch((err) => {
  console.error("Error removing background:", err);
  process.exit(1);
});
