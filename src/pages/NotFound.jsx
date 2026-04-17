import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="luxury-container flex min-h-[72vh] flex-col items-center justify-center pt-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">404</p>
      <h1 className="mt-5 font-display text-5xl font-semibold text-obsidian dark:text-porcelain md:text-7xl">
        This wall is still blank.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-8 text-smoke dark:text-linen/72">
        Return to the collection and find the piece that belongs there.
      </p>
      <Link
        to="/products"
        className="mt-8 rounded-md bg-obsidian px-7 py-4 text-sm font-semibold text-white transition hover:bg-champagne hover:text-obsidian dark:bg-champagne dark:text-obsidian"
      >
        View Products
      </Link>
    </section>
  );
}
