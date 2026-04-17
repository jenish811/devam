import ProductGrid from "../components/ProductGrid.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { products } from "../data/products.js";

export default function Products() {
  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="luxury-container">
        <SectionHeader eyebrow="Collection" title="Layered works for refined walls">
          Explore handcrafted mandalas, abstract figures, and sculptural MDF artworks made for residential and commercial spaces.
        </SectionHeader>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-smoke dark:text-linen/72">
          <span className="rounded-md border border-obsidian/10 px-4 py-2 dark:border-porcelain/10">
            Mandala Art
          </span>
          <span className="rounded-md border border-obsidian/10 px-4 py-2 dark:border-porcelain/10">
            Inspiration Art
          </span>
          <span className="rounded-md border border-obsidian/10 px-4 py-2 dark:border-porcelain/10">
            Custom Scale
          </span>
        </Reveal>

        <div className="mt-12">
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
}
