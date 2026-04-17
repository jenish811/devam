import { motion } from "framer-motion";
import { getWhatsAppLink } from "../data/products.js";

export default function WhatsAppButton({ productName }) {
  return (
    <motion.a
      href={getWhatsAppLink(productName)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:shadow-luxury-dark"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0.82, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
      >
        <path d="M16.02 4C9.4 4 4.02 9.35 4.02 15.92c0 2.1.55 4.15 1.6 5.95L4 28l6.3-1.64a12.05 12.05 0 0 0 5.72 1.45c6.62 0 12-5.34 12-11.9C28.02 9.36 22.64 4 16.02 4Zm0 21.77c-1.76 0-3.48-.47-4.98-1.35l-.36-.21-3.74.98 1-3.63-.24-.38a9.72 9.72 0 0 1-1.48-5.25c0-5.45 4.4-9.88 9.8-9.88s9.8 4.43 9.8 9.88-4.4 9.84-9.8 9.84Zm5.38-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.75-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.11.57-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </motion.a>
  );
}
