import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid.jsx";
import Reveal from "../components/Reveal.jsx";
import { getWhatsAppLink, products } from "../data/products.js";

const features = [
  "Premium layered MDF construction",
  "Precision laser-cut detailing",
  "Hand-finished color and surface treatment",
  "Secure French clamp hanging system",
  "Certificate of originality on request",
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const [activeImage, setActiveImage] = useState(product?.gallery?.[0]);

  useEffect(() => {
    setActiveImage(product?.gallery?.[0]);
  }, [product]);

  const related = useMemo(() => {
    if (!product) return [];
    return products
      .filter((item) => item.id !== product.id && item.category === product.category)
      .slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <section className="luxury-container pt-36 pb-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">Not Found</p>
        <h1 className="mt-5 font-display text-5xl font-semibold">Artwork not found</h1>
        <Link
          to="/products"
          className="mt-8 inline-flex rounded-md bg-obsidian px-6 py-4 text-sm font-semibold text-white dark:bg-champagne dark:text-obsidian"
        >
          Back to Collection
        </Link>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 md:pb-28">
      <div className="luxury-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Reveal>
          <div className="sticky top-28">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0.55, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.38 }}
              className="aspect-[4/5] overflow-hidden rounded-md bg-linen dark:bg-graphite md:aspect-square"
            >
              <img
                src={activeImage || product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.gallery.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`aspect-square overflow-hidden rounded-md border transition ${
                    activeImage === image
                      ? "border-champagne"
                      : "border-obsidian/10 dark:border-porcelain/10"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="lg:pt-8">
            <Link
              to="/products"
              className="text-sm font-semibold text-champagne transition hover:text-obsidian dark:hover:text-porcelain"
            >
              Back to Collection
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              {product.category}
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-obsidian dark:text-porcelain md:text-7xl">
              {product.name}
            </h1>
            <p className="mt-6 text-lg leading-9 text-smoke dark:text-linen/72">
              {product.description}
            </p>

            <div className="mt-9 grid gap-px overflow-hidden rounded-md border border-obsidian/8 bg-obsidian/8 dark:border-porcelain/10 dark:bg-porcelain/10 sm:grid-cols-2">
              {[
                ["Investment", product.price],
                ["Dimensions", product.dimension],
                ["Approx. weight", product.weight],
                ["Dominant colours", product.colors],
              ].map(([label, value]) => (
                <div key={label} className="bg-white p-5 dark:bg-graphite">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-smoke dark:text-linen/72">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-obsidian dark:text-porcelain">
                Features
              </h2>
              <ul className="mt-5 grid gap-3">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-7 text-smoke dark:text-linen/72">
                    <span className="mt-3 h-px w-8 shrink-0 bg-champagne" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={getWhatsAppLink(product.name)}
              target="_blank"
              rel="noreferrer"
              className="sticky bottom-5 z-20 mt-10 inline-flex w-full items-center justify-center rounded-md bg-champagne px-7 py-4 text-sm font-bold text-obsidian shadow-luxury transition hover:bg-champagne-soft md:w-auto"
            >
              Buy Now on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="luxury-container mt-20 md:mt-28">
          <Reveal className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                Continue Exploring
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold text-obsidian dark:text-porcelain">
                Related works
              </h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-champagne">
              View all artworks
            </Link>
          </Reveal>
          <ProductGrid products={related} />
        </div>
      )}
    </section>
  );
}
