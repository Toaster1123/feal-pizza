import {
  Container,
  Title,
  TopBar,
  ProductsGroupList,
  Filters,
  Stories,
} from '@/shared/components/shared';
import { Suspense } from 'react';
import { findPizzas, GetSearchParams } from '@/shared/lib/find-pizzas';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const categories = await findPizzas(await searchParams);

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />
      <Stories />
      <Container className="pt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="min-w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
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
