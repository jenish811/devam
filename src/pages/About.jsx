import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { featuredProducts } from "../data/products.js";

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="luxury-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              Brand Story
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-obsidian dark:text-porcelain md:text-7xl">
              Art for walls with architecture, memory, and mood.
            </h1>
            <p className="mt-6 text-lg leading-9 text-smoke dark:text-linen/72">
              Wallantq creates handcrafted layered MDF wall art from Surat, blending mandala tradition,
              precision cutting, and contemporary interior sensibility.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="aspect-[4/5] overflow-hidden rounded-md bg-linen dark:bg-graphite">
              <img
                src={featuredProducts[2].image}
                alt="Wallantq abstract layered wall art"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-500 dark:bg-graphite md:py-28">
        <div className="luxury-container">
          <SectionHeader eyebrow="Craftsmanship" title="Handmade character, engineered precision">
            Each artwork begins with pattern, proportion, and depth before moving through cutting, staining,
            painting, layering, finishing, and final inspection.
          </SectionHeader>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Design", "Patterns are refined for visual balance, wall scale, and layered movement."],
              ["02", "Make", "MDF sheets are laser-cut, aligned, assembled, and finished by hand."],
              ["03", "Install", "The final piece is prepared for secure hanging and everyday durability."],
            ].map(([number, title, text], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="border-t border-champagne pt-6">
                  <span className="font-display text-5xl font-semibold text-champagne/55">{number}</span>
                  <h3 className="mt-5 font-display text-3xl font-semibold text-obsidian dark:text-porcelain">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-smoke dark:text-linen/72">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
