import { Container, Title, TopBar, ProductsGroupList, Filters } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
        <TopBar />
      </Container>
      <Container className="pt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex">
            Список товаров
            {/* <ProductsGroupList title="Пиццы" items={[1, 2 , 3 , 4, 5]} />
                <ProductsGroupList title="Комбо" items={[1, 2 , 3 , 4, 5]} /> */}
          </div>
        </div>
      </Container>
    </>
  );
}
