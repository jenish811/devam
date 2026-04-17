import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { getWhatsAppLink } from "../data/products.js";

export default function Contact() {
  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="luxury-container">
        <SectionHeader eyebrow="Contact" title="Begin with your wall">
          Send Wallantq a photo of your wall, approximate size, and preferred artwork style.
        </SectionHeader>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-md bg-obsidian p-8 text-white md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne-soft">
                WhatsApp
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">
                Ask for availability, scale, or custom work.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/76">
                Wallantq can guide artwork selection for living rooms, entrance walls, commercial spaces,
                galleries, and gifting.
              </p>
              <a
                href={getWhatsAppLink("a Wallantq wall art")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-md bg-champagne px-7 py-4 text-sm font-bold text-obsidian transition hover:bg-champagne-soft"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid h-full gap-5">
              <div className="rounded-md border border-obsidian/8 bg-white p-7 dark:border-porcelain/10 dark:bg-graphite">
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                  Studio
                </h3>
                <p className="mt-4 text-sm leading-7 text-smoke dark:text-linen/72">
                  407, Meridian Business Center, Lajamni Chowk, opposite Opera Business Center,
                  Mota Varachha, Surat, Gujarat 394105
                </p>
              </div>
              <div className="rounded-md border border-obsidian/8 bg-white p-7 dark:border-porcelain/10 dark:bg-graphite">
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                  Details
                </h3>
                <p className="mt-4 text-sm text-smoke dark:text-linen/72">info@wallantq.com</p>
                <p className="mt-3 text-sm text-smoke dark:text-linen/72">+91 85113 18630</p>
                <a
                  href="https://www.instagram.com/wallantq"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex text-sm font-semibold text-champagne"
                >
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
