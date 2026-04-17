import { mediaProducts } from "./mediaManifest.js";

export const whatsappNumber = "918511318630";

const titleMap = {
  WANXMF05: "Aurora Abstract 3D Wall Art",
  WINXMF00: "Muse Flow 3D Wall Art",
  WINXMF01: "Serene Muse Wall Sculpture",
  WINXMF02: "Muse and Bird 3D Wall Art",
  WINXMF03: "Grace Line Statement Art",
  WINXMF04: "Elegant Woman Silhouette Art",
  WMNXMF02: "Radiant Mandala Wall Art",
  WMNXMF05: "Vibrant Round Mandala Art",
  WMNXMF16: "Lotus Mandala 3D Wall Art",
  WMNXMF17: "Celestial Mandala Wall Art",
  WMNXMF19: "Elaborate Mandala Wood Art",
  WMNXMF22: "Round Mandala 3D Wall Art",
  WMNXMF26: "Royal Mandala Wall Art",
  WMNXMF27_sq: "Square Mandala 3D Wood Art",
  WMNXMF27: "Vibrant Mandala 3D Wood Art",
  WMNXMF39: "Signature Mandala Wall Art",
};

export const products = mediaProducts.map((item, index) => ({
  ...item,
  id: index + 1,
  name: titleMap[item.code] || item.title,
  title: titleMap[item.code] || item.title,
  dimension: item.size,
  colors: "Premium hand-finished palette",
  weight: item.category.includes("Mandala") ? "8-12 kg approx." : "4-7 kg approx.",
  gallery: [item.imageLarge, item.image, item.imageSmall],
  featured: index < 8 || item.code.includes("27") || item.code.includes("22"),
}));

export const mediaVideos = products.filter((product) => product.video);

export const getWhatsAppMessage = (product = {}) => {
  const item = typeof product === "string" ? { name: product } : product;

  return `Hi, I want to buy this product:\n${item.name || "Wallantq wall decor"}\nPrice: ${
    item.price || "Please share price"
  }\nImage preview: ${typeof window !== "undefined" ? window.location.origin : ""}${
    item.image || ""
  }`;
};

export const getWhatsAppLink = (product = {}) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage(product))}`;

export const featuredProducts = products.filter((product) => product.featured);

export const getSimilarProducts = (product, limit = 3) => {
  if (!product) return [];

  return products
    .filter((item) => item.id !== product.id)
    .map((item) => ({
      item,
      score:
        (item.category === product.category ? 3 : 0) +
        item.tags.filter((tag) => product.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
};
