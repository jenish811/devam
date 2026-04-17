import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "../data/products.js";

export default function ProductCard({ product }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-md border border-obsidian/8 bg-white shadow-luxury transition-colors duration-500 dark:border-porcelain/10 dark:bg-graphite dark:shadow-luxury-dark"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/products/${product.slug}`} className="block">
        <div className="aspect-[4/5] overflow-hidden bg-linen dark:bg-obsidian">
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              {product.category}
            </p>
            <Link to={`/products/${product.slug}`}>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-obsidian transition group-hover:text-champagne dark:text-porcelain">
                {product.name}
              </h3>
            </Link>
          </div>
          <span className="shrink-0 text-sm font-semibold text-obsidian dark:text-porcelain">
            {product.price}
          </span>
        </div>
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-smoke dark:text-linen/70">
          {product.description}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-md border border-obsidian/12 px-4 py-3 text-sm font-semibold transition hover:border-champagne hover:text-champagne dark:border-porcelain/14"
          >
            View Details
          </Link>
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-md bg-obsidian px-4 py-3 text-sm font-semibold text-white transition hover:bg-champagne hover:text-obsidian dark:bg-champagne dark:text-obsidian dark:hover:bg-champagne-soft"
          >
            Buy Now
          </a>
        </div>
      </div>
    </motion.article>
  );
}
