import { ChooseProductModal } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const product = await prisma.product.findFirst({
    where: { id },
    include: {
      ingredients: true,
      items: true,
    },
  });
  if (!product) {
    return notFound();
  }
  return <ChooseProductModal product={product} />;
}
