import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "../data/products.js";

export default function ProductCard({ product }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-md border border-obsidian/8 bg-white shadow-[0_18px_54px_rgba(17,16,14,0.09)] transition-colors duration-500 dark:border-porcelain/10 dark:bg-graphite dark:shadow-luxury-dark"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/products/${product.slug}`} className="block">
        <div className="aspect-[4/5] overflow-hidden bg-linen dark:bg-obsidian">
          <motion.img
            src={product.image}
            srcSet={product.srcSet}
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
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
          <details className="contents">
            <summary className="inline-flex flex-1 cursor-pointer list-none items-center justify-center rounded-md bg-obsidian px-4 py-3 text-sm font-semibold text-white transition marker:hidden hover:bg-champagne hover:text-obsidian dark:bg-champagne dark:text-obsidian dark:hover:bg-champagne-soft">
              Buy Now
            </summary>
            <div className="fixed inset-0 z-[70] grid place-items-end bg-obsidian/58 px-4 py-4 backdrop-blur-sm sm:place-items-center">
              <div className="w-full max-w-lg overflow-hidden rounded-md border border-white/16 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.32)] dark:bg-graphite">
                <div className="grid sm:grid-cols-[0.86fr_1fr]">
                  <img
                    src={product.image}
                    srcSet={product.srcSet}
                    sizes="(min-width: 640px) 240px, 100vw"
                    alt={product.name}
                    className="h-64 w-full object-cover sm:h-full"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                      WhatsApp Preview
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-obsidian dark:text-porcelain">
                      {product.name}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-smoke dark:text-linen/72">
                      {product.description}
                    </p>
                    <div className="mt-5 rounded-md bg-linen p-4 text-sm dark:bg-obsidian/70">
                      <p className="font-semibold text-obsidian dark:text-porcelain">{product.price}</p>
                      <p className="mt-1 text-sm text-smoke dark:text-linen/70">{product.size}</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <summary className="inline-flex flex-1 cursor-pointer list-none items-center justify-center rounded-md border border-obsidian/12 px-4 py-3 text-sm font-semibold marker:hidden dark:border-porcelain/14">
                        Cancel
                      </summary>
                      <a
                        href={getWhatsAppLink(product)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center rounded-md bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:brightness-95"
                      >
                        Continue
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </motion.article>
  );
}
