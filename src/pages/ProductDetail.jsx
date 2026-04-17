import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid.jsx";
import Reveal from "../components/Reveal.jsx";
import WhatsAppPreviewModal from "../components/WhatsAppPreviewModal.jsx";
import { getSimilarProducts, products } from "../data/products.js";

const features = [
  "Premium layered MDF construction",
  "Precision laser-cut detailing",
  "Hand-finished color and surface treatment",
  "Secure wall mounting guidance",
  "Packed for protected delivery",
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const [activeImage, setActiveImage] = useState(product?.gallery?.[0]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    setActiveImage(product?.gallery?.[0]);
  }, [product]);

  const related = useMemo(() => getSimilarProducts(product, 3), [product]);

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

  const shareProduct = async () => {
    const shareData = {
      title: product.name,
      text: `${product.name} by Wallantq`,
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      <section className="pt-28 pb-20 md:pb-28">
        <div className="luxury-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div className="sticky top-28">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0.55, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.38 }}
                className="group aspect-[4/5] overflow-hidden rounded-md bg-linen dark:bg-graphite md:aspect-square"
              >
                <img
                  src={activeImage || product.image}
                  srcSet={activeImage === product.image ? product.srcSet : undefined}
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="eager"
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
              {product.video && (
                <video
                  className="mt-4 aspect-video w-full rounded-md object-cover"
                  poster={product.image}
                  controls
                  preload="metadata"
                >
                  <source src={product.video} type="video/mp4" />
                </video>
              )}
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
                  ["Price", product.price],
                  ["Size options", product.size],
                  ["Material", product.material],
                  ["Delivery", product.delivery],
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
                  Details
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

              <div className="sticky bottom-5 z-20 mt-10 flex flex-col gap-3 rounded-md border border-white/40 bg-white/76 p-2 shadow-luxury backdrop-blur-xl dark:border-porcelain/10 dark:bg-obsidian/72 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className="inline-flex flex-1 items-center justify-center rounded-md bg-[#25D366] px-7 py-4 text-sm font-bold text-white transition hover:brightness-95"
                >
                  Buy Now via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={shareProduct}
                  className="inline-flex items-center justify-center rounded-md border border-obsidian/12 px-7 py-4 text-sm font-bold text-obsidian transition hover:border-champagne hover:text-champagne dark:border-porcelain/14 dark:text-porcelain"
                >
                  Share
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="luxury-container mt-20 md:mt-28">
            <Reveal className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                  Recommended
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-obsidian dark:text-porcelain">
                  Similar products
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
      <WhatsAppPreviewModal
        product={product}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}
