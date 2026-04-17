import ProductCard from "./ProductCard.jsx";
import Reveal from "./Reveal.jsx";

export default function ProductGrid({ products }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <Reveal key={product.id} delay={index * 0.05}>
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}
