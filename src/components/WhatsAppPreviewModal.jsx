import { AnimatePresence, motion } from "framer-motion";
import { getWhatsAppLink } from "../data/products.js";

export default function WhatsAppPreviewModal({ product, isOpen, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-end bg-obsidian/58 px-4 py-4 backdrop-blur-sm sm:place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-lg overflow-hidden rounded-md border border-white/16 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.32)] dark:bg-graphite"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid gap-0 sm:grid-cols-[0.86fr_1fr]">
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
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex flex-1 items-center justify-center rounded-md border border-obsidian/12 px-4 py-3 text-sm font-semibold dark:border-porcelain/14"
                  >
                    Cancel
                  </button>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
