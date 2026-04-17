import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { featuredProducts, mediaVideos, products } from "../data/products.js";

const stats = [
  ["32", "Drive assets live"],
  ["16", "Optimized WebP artworks"],
  ["16", "Product reels"],
  ["3D", "Layered finish"],
];

export default function Home() {
  const [videoRatios, setVideoRatios] = useState({});
  const mandalas = products.filter((product) => product.category.includes("Mandala"));
  const inspiration = products.filter((product) => product.category.includes("Inspirational"));
  const before = products.find((product) => product.code === "WINXMF00") || products[1];
  const after = products.find((product) => product.code === "WMNXMF27") || products[0];

  const handleVideoMetadata = (productId, event) => {
    const { videoWidth, videoHeight } = event.currentTarget;

    if (!videoWidth || !videoHeight) {
      return;
    }

    const ratio = videoWidth / videoHeight;
    setVideoRatios((currentRatios) =>
      currentRatios[productId] === ratio
        ? currentRatios
        : { ...currentRatios, [productId]: ratio },
    );
  };

  const getReelCardWidth = (productId) => `${Math.round(520 * (videoRatios[productId] || 9 / 16))}px`;

  return (
    <>
      <HeroSection />

      <section className="border-y border-obsidian/8 bg-white py-8 transition-colors duration-500 dark:border-porcelain/10 dark:bg-graphite">
        <div className="luxury-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="py-3">
              <p className="font-display text-4xl font-semibold text-obsidian dark:text-porcelain">
                {value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-smoke dark:text-linen/70">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <SectionHeader eyebrow="Trending Products" title="Statement pieces with quiet power">
            Premium wall decor shaped from layered MDF, refined color, and gallery-scale depth.
          </SectionHeader>
          <div className="mt-12">
            <ProductGrid products={featuredProducts.slice(0, 8)} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-500 dark:bg-graphite md:py-28">
        <div className="luxury-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              Before / After
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-obsidian dark:text-porcelain md:text-6xl">
              The wall becomes the room.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-smoke dark:text-linen/72">
              Scale, shadow, and dimensional detail create an instant focal point without crowding the interior.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-flex rounded-md bg-obsidian px-7 py-4 text-sm font-bold text-white transition hover:bg-champagne hover:text-obsidian dark:bg-champagne dark:text-obsidian"
            >
              Explore Collection
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[before, after].map((product, index) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-md bg-linen dark:bg-obsidian"
                >
                  <img
                    src={product.image}
                    srcSet={product.srcSet}
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/78 to-transparent p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne-soft">
                      {index === 0 ? "Before mood" : "After statement"}
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold">{product.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <SectionHeader eyebrow="Customer Inspiration" title="Collected walls, different moods">
            Browse every artwork from the Drive photo set in one fluid gallery.
          </SectionHeader>
          <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[260px]">
            {products.map((item, index) => (
              <Reveal
                key={item.id}
                delay={(index % 8) * 0.03}
                className={index % 7 === 0 || index % 7 === 4 ? "md:col-span-2 md:row-span-2" : ""}
              >
                <Link
                  to={`/products/${item.slug}`}
                  className="group block h-full overflow-hidden rounded-md bg-linen dark:bg-graphite"
                >
                  <img
                    src={item.image}
                    srcSet={item.srcSet}
                    sizes="(min-width: 768px) 25vw, 50vw"
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian py-20 text-white md:py-28">
        <div className="luxury-container">
          <SectionHeader eyebrow="Video Reels" title="Product movement, texture, and depth" />
          <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4">
            {mediaVideos.map((product, index) => (
              <motion.article
                key={product.id}
                className="relative h-[520px] shrink-0 snap-start overflow-hidden rounded-md bg-black"
                style={{
                  aspectRatio: videoRatios[product.id] || 9 / 16,
                  width: getReelCardWidth(product.id),
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (index % 5) * 0.04 }}
              >
                <video
                  className="h-full w-full object-contain"
                  poster={product.image}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={(event) => handleVideoMetadata(product.id, event)}
                  onMouseEnter={(event) => event.currentTarget.play()}
                  onMouseLeave={(event) => event.currentTarget.pause()}
                >
                  <source src={product.video} type="video/mp4" />
                </video>
                <Link
                  to={`/products/${product.slug}`}
                  className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/82 to-transparent p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne-soft">
                    Reel {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{product.name}</h3>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="luxury-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              Smart Collections
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-obsidian dark:text-porcelain md:text-6xl">
              Auto-tagged by visual family.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-smoke dark:text-linen/72">
              The catalog is generated from the media manifest, grouped by product code patterns, and ready for new uploads.
            </p>
          </Reveal>

          <div className="grid gap-5">
            {[
              ["Mandala Wall Art", mandalas],
              ["Inspirational Wall Art", inspiration],
              ["Abstract Wall Art", products.filter((product) => product.category.includes("Abstract"))],
            ].map(([title, items]) => (
              <Reveal key={title}>
                <div className="rounded-md border border-obsidian/8 bg-white p-6 dark:border-porcelain/10 dark:bg-graphite">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-3xl font-semibold text-obsidian dark:text-porcelain">
                      {title}
                    </h3>
                    <span className="text-sm font-semibold text-champagne">{items.length} pieces</span>
                  </div>
                  <div className="mt-5 flex -space-x-4">
                    {items.slice(0, 5).map((item) => (
                      <img
                        key={item.id}
                        src={item.imageSmall}
                        alt={item.name}
                        className="h-16 w-16 rounded-md border-2 border-white object-cover dark:border-graphite"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
