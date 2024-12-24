import { Container, Title, TopBar, ProductsGroupList, Filters } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });
  console.log(categories[0].products);
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />
      <Container className="pt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="min-w-[250px]">
            <Filters />
          </div>
          <div className="">
            {categories.map(
              (category) =>
                category.products.length > 0 && (
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    categoryId={category.id}
                    items={category.products}
                  />
                ),
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
