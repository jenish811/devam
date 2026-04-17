import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const rawDir = path.join(root, "public", "media", "raw");
const photoDir = path.join(root, "public", "media", "photos");
const videoDir = path.join(root, "public", "media", "videos");
const manifestPath = path.join(root, "src", "data", "mediaManifest.js");

const widths = [640, 960, 1400];

const titleCase = (value) =>
  value
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const smartCategory = (code) => {
  if (code.startsWith("WMN")) return "Mandala Wall Art";
  if (code.startsWith("WIN")) return "Inspirational Wall Art";
  if (code.startsWith("WAN")) return "Abstract Wall Art";
  return "Premium Wall Decor";
};

const smartPrice = (code) => {
  if (code.includes("27")) return "₹84,999";
  if (code.includes("19") || code.includes("22") || code.includes("26")) return "₹64,999";
  if (code.startsWith("WIN")) return "₹42,999";
  return "₹52,999";
};

const sizeFor = (code) => {
  if (code.includes("27") || code.includes("19")) return "48 x 36 inches";
  if (code.startsWith("WIN")) return "24 x 36 inches";
  return "36 x 36 inches";
};

const descriptionFor = (code, category) => {
  if (category.includes("Mandala")) {
    return "Layered dimensional mandala art with precise geometry, deep shadows, and a gallery-grade finish.";
  }

  if (category.includes("Inspirational")) {
    return "Sculptural statement art with flowing forms, expressive detail, and a refined modern finish.";
  }

  return "Premium wall decor designed to bring movement, depth, and a polished focal point to the room.";
};

await fs.mkdir(photoDir, { recursive: true });

const rawFiles = (await fs.readdir(rawDir)).filter((file) => /\.(jpe?g|png)$/i.test(file));
const videoFiles = new Set((await fs.readdir(videoDir)).filter((file) => /\.mp4$/i.test(file)));

const items = [];

for (const file of rawFiles.sort((a, b) => a.localeCompare(b))) {
  const ext = path.extname(file);
  const code = path.basename(file, ext);
  const base = slugify(code);
  const input = path.join(rawDir, file);
  const variants = [];

  for (const width of widths) {
    const outputName = `${base}-${width}.webp`;
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(path.join(photoDir, outputName));
    variants.push(`/media/photos/${outputName}`);
  }

  const category = smartCategory(code);
  const videoName =
    videoFiles.has(`${code}.mp4`) ? `${code}.mp4` : videoFiles.has(`${code.toUpperCase()}.mp4`) ? `${code.toUpperCase()}.mp4` : null;

  items.push({
    code,
    slug: slugify(`${code} ${category}`),
    title: titleCase(code),
    category,
    price: smartPrice(code),
    description: descriptionFor(code, category),
    size: sizeFor(code),
    material: "Layered MDF, precision laser-cut and hand finished",
    delivery: "Packed securely. Dispatch guidance shared on WhatsApp after order confirmation.",
    image: variants[1],
    imageSmall: variants[0],
    imageLarge: variants[2],
    srcSet: variants.map((src, index) => `${src} ${widths[index]}w`).join(", "),
    video: videoName ? `/media/videos/${videoName}` : null,
    tags: [category, code.startsWith("WMN") ? "Geometric" : "Statement", "3D Layered"],
  });
}

const source = `export const mediaProducts = ${JSON.stringify(items, null, 2)};\n`;
await fs.writeFile(manifestPath, source);

console.log(`Optimized ${items.length} products into ${photoDir}`);
