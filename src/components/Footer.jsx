import { Link } from "react-router-dom";
import { getWhatsAppLink } from "../data/products.js";

export default function Footer() {
  return (
    <footer className="border-t border-obsidian/8 bg-white py-14 transition-colors duration-500 dark:border-porcelain/10 dark:bg-graphite">
      <div className="luxury-container grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex">
            <span className="brand-logo">
              <img src="/logo_devam_png_black.png" alt="Wallantq" />
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-smoke dark:text-linen/72">
            Premium layered MDF wall art, crafted for interiors that ask for quiet drama and lasting detail.
          </p>
          <a
            href={getWhatsAppLink("a custom Wallantq artwork")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-md border border-champagne px-5 py-3 text-sm font-semibold text-champagne transition hover:bg-champagne hover:text-obsidian"
          >
            WhatsApp Wallantq
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">Studio</h3>
          <div className="mt-5 grid gap-3 text-sm text-smoke dark:text-linen/72">
            <Link className="transition hover:text-champagne" to="/products">Products</Link>
            <Link className="transition hover:text-champagne" to="/about">About</Link>
            <Link className="transition hover:text-champagne" to="/contact">Contact</Link>
            <a className="transition hover:text-champagne" href="https://www.instagram.com/wallantq" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">Visit</h3>
          <p className="mt-5 text-sm leading-7 text-smoke dark:text-linen/72">
            407, Meridian Business Center, Lajamni Chowk, Mota Varachha, Surat, Gujarat 394105
          </p>
          <p className="mt-4 text-sm text-smoke dark:text-linen/72">info@wallantq.com</p>
          <p className="mt-2 text-sm text-smoke dark:text-linen/72">+91 85113 18630</p>
        </div>
      </div>

      <div className="luxury-container mt-12 flex flex-col gap-4 border-t border-obsidian/8 pt-6 text-xs text-smoke dark:border-porcelain/10 dark:text-linen/60 sm:flex-row sm:items-center sm:justify-between">
        <span>Wallantq Gallery Private Limited</span>
        <span>GST: 24AADCW6668E1Z5</span>
      </div>
    </footer>
  );
}
