import {NextResponse, NextRequest} from "next/server";
import {prisma} from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const product = await prisma.product.findUnique({
    where: {
      id: body.productId
    }
  });

  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }
 
  const cart = await prisma.cart.create({
    data: {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: body.quantity,
      total: product.price * body.quantity,
      image: product.image
    }
    
  });

  return NextResponse.json(cart);
}