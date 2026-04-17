import Reveal from "./Reveal.jsx";

export default function SectionHeader({ eyebrow, title, children, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <Reveal className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl font-semibold leading-tight text-balance text-obsidian dark:text-porcelain md:text-6xl">
        {title}
      </h2>
      {children && (
        <p className="max-w-2xl text-base leading-8 text-smoke dark:text-linen/72">
          {children}
        </p>
      )}
    </Reveal>
  );
}
