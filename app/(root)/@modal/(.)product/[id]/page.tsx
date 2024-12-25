import {
  ChooseProductModal,
  Container,
  GroupVariants,
  ProductImage,
  Title,
} from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductModalPage({ params: { id } }: { params: { id: number } }) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      items: true,
    },
  });
  if (!product) {
    return notFound();
  }

  return (
    <div>
      {/* <Container className="flex flex-col my-10"> */}
      <ChooseProductModal product={product} />
      {/* </Container> */}
    </div>
  );
}
