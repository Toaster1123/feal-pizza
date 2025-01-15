import { Container, ProductForm } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: Promise<{ id: number }> }) {
  const id = Number((await params).id);

  const product = await prisma.product.findFirst({
    where: { id },
    include: {
      ingredients: true,
      // TODO оптимизировать запрос рекомендаций!!!
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <Container className="flex flex-col my-10">
        <ProductForm product={product} />
      </Container>
    </div>
  );
}
