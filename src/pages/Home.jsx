import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { featuredProducts, getWhatsAppLink, products } from "../data/products.js";

const values = [
  {
    title: "Limited Pieces",
    text: "Small edition artworks designed for homes, studios, offices, and statement walls.",
  },
  {
    title: "Layered Craft",
    text: "Precision laser-cut MDF, hand finishing, and careful assembly for real sculptural depth.",
  },
  {
    title: "Ready To Hang",
    text: "Each piece is crafted with a secure wall system and considered proportions.",
  },
];

const testimonials = [
  {
    quote: "The mandala changed the entire mood of our living room. It feels artistic without shouting.",
    name: "Aarav M.",
  },
  {
    quote: "The depth is beautiful in person. Every layer catches light differently through the day.",
    name: "Neha S.",
  },
  {
    quote: "Wallantq helped us choose the right scale for our office lounge. It feels custom and premium.",
    name: "Karan P.",
  },
];

export default function Home() {
  const gallery = products.slice(0, 6);

  return (
    <>
      <HeroSection />

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <SectionHeader
            eyebrow="Featured Collection"
            title="Quiet drama for considered interiors"
          >
            Sculptural wall art with intricate geometry, warm finishes, and a gallery-grade presence.
          </SectionHeader>
          <div className="mt-12">
            <ProductGrid products={featuredProducts.slice(0, 6)} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-500 dark:bg-graphite md:py-28">
        <div className="luxury-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              Why Wallantq
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-obsidian dark:text-porcelain md:text-6xl">
              Built for walls that deserve more than decoration.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-smoke dark:text-linen/72">
              Every artwork is drawn, cut, layered, finished, and packed with an eye for architectural scale.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="border-l border-champagne px-6 py-5">
                  <h3 className="font-display text-3xl font-semibold text-obsidian dark:text-porcelain">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-smoke dark:text-linen/72">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <SectionHeader eyebrow="Gallery" title="A wall, a shadow, a second look">
            A visual rhythm inspired by Wallantq's Instagram-style product storytelling.
          </SectionHeader>
          <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[260px]">
            {gallery.map((item, index) => (
              <Reveal
                key={item.id}
                delay={index * 0.04}
                className={index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""}
              >
                <Link
                  to={`/products/${item.slug}`}
                  className="group block h-full overflow-hidden rounded-md bg-linen dark:bg-graphite"
                >
                  <img
                    src={item.image}
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

      <section className="overflow-hidden border-y border-obsidian/8 bg-obsidian py-5 text-porcelain dark:border-porcelain/10">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.26em] text-champagne-soft">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex gap-10">
              <span>Handmade</span>
              <span>Laser Cut</span>
              <span>Limited Edition</span>
              <span>Layered MDF</span>
              <span>Gallery Finish</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-500 dark:bg-graphite md:py-28">
        <div className="luxury-container">
          <SectionHeader eyebrow="Testimonials" title="Collected for the feeling it creates" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.06}>
                <figure className="rounded-md border border-obsidian/8 bg-porcelain p-7 dark:border-porcelain/10 dark:bg-obsidian">
                  <blockquote className="font-display text-2xl leading-9 text-obsidian dark:text-porcelain">
                    "{item.quote}"
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-semibold text-champagne">
                    {item.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-md bg-obsidian px-6 py-14 text-center text-white md:px-14">
              <img
                src={featuredProducts[1].image}
                alt="Wallantq layered mandala artwork"
                className="absolute inset-0 h-full w-full object-cover opacity-24"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-obsidian/70" />
              <div className="relative mx-auto max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne-soft">
                  Private Inquiry
                </p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">
                  Bring a statement wall to life.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/78">
                  Share your wall size, room mood, and preferred artwork style. Wallantq will guide the next step.
                </p>
                <a
                  href={getWhatsAppLink("a Wallantq wall art consultation")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-md bg-champagne px-7 py-4 text-sm font-bold text-obsidian transition hover:bg-champagne-soft"
                >
                  Start on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
