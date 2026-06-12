type Product = {
  id: number;
  brand: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number | null;
  discount?: number | null;
  image: string;
};

type Props = {
  products: Product[];
};

export function ProductDetails({products}: Props) {

  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <p className="uppercase font-bold mb-2">
            {product.brand}
          </p>
          <h1 className="text-3xl text-[hsl(var(--black))] font-bold mb-4">{product.name}</h1>
          <p>
            {product.description}
          </p>
          <div className="flex flex-row justify-between items-center py-8 font-bold lg:flex-col lg:items-start lg:gap-4">
            <div className="flex flex-row items-center justify-center gap-4">
              <span className="text-3xl font-bold text-[hsl(var(--black))]">${(product.price).toFixed(2)}</span>
              <span className="text-[hsl(var(--white))] bg-[hsl(var(--black))] px-2 py-0.5 rounded-md">{product.discount}%</span>
            </div>
            <span className="ml-4 text-gray-500 line-through lg:ml-0">${(product.oldPrice)?.toFixed(2)}</span>
          </div>
        </div>
      ))}
    </section>
  );
}