export function ProductDetails() {
  return (
    <section>
      <p className="uppercase font-bold mb-2">
        Sneaker Company
      </p>
      <h1 className="text-3xl text-[hsl(var(--black))] font-bold mb-4">Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
      <div className="flex flex-row justify-between items-center py-8 font-bold">
        <div className="flex flex-row items-center justify-center gap-4">
          <span className="text-3xl font-bold text-[hsl(var(--black))]">$125.00</span>
          <span className="text-[hsl(var(--white))] bg-[hsl(var(--black))] px-2 py-0.5 rounded-md">50%</span>
        </div>
        <span className="ml-4 text-gray-500 line-through">$250.00</span>
      </div>
    </section>
  );
}