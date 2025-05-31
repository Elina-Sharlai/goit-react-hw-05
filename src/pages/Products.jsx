import { ProductList } from "../components/ProductList";
import { getProducts } from "../fakeApi";

export default function Products() {
  const products = getProducts();

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
