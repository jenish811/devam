import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getWhatsAppLink, products } from "../data/products.js";

const heroProduct =
  products.find((product) => product.slug === "elegant-woman-silhouette-3d-art") || products[0];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90svh] overflow-hidden bg-obsidian">
      <motion.img
        src={heroProduct.image}
        alt="Wallantq elegant layered wall art"
        className="absolute inset-0 h-full w-full object-cover object-[68%_50%]"
        loading="eager"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/88 via-50% to-obsidian/24" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/72 via-transparent to-obsidian/18" />

      <div className="luxury-container relative flex min-h-[90svh] flex-col justify-center pb-12 pt-32">
        <motion.div
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-champagne-soft">
            Luxury layered MDF wall art
          </p>

          <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.03] text-balance drop-shadow-[0_6px_26px_rgba(0,0,0,0.48)] sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Your Walls Into Art
          </h1>
          <p className="mt-6 max-w-lg text-base font-medium leading-8 text-white/84 drop-shadow-[0_3px_14px_rgba(0,0,0,0.45)] md:text-lg">
            Handcrafted mandalas and sculptural wall pieces made for interiors that value detail, proportion, and atmosphere.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-md bg-champagne px-7 py-4 text-sm font-bold text-obsidian shadow-luxury transition hover:bg-champagne-soft"
            >
              Explore Collection
            </Link>
            <a
              href={getWhatsAppLink(heroProduct.name)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:border-champagne hover:text-champagne-soft"
            >
              Buy Now
            </a>
          </div>

          <div className="mt-12 h-px w-32 bg-champagne/70" />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
            Premium layered MDF, precision laser cut, hand finished, and ready to hang.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
