export function Cart() {
  return (
    <div className="flex flex-col items-stretch absolute top-30 left-4 right-4 h-82 rounded-xl bg-[hsl(var(--white))] z-1000 lg: lg:h-60 lg:w-80 lg:right-12 lg:left-auto lg:border lg:border-[hsl(var(--grayish-blue))]">
      <h1 className="text-[hsl(var(--black))] font-bold py-6 px-4 border-b border-[hsl(var(--grayish-blue))]">Cart</h1>
      <p className="text-[hsl(var(--dark-grayish-blue))] flex flex-col justify-center items-center h-full">Your cart is empty.</p>
    </div>
  )
}