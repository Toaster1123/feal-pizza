import { Container, Title, TopBar, ProductsGroupList, Filters } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="">
            <ProductsGroupList
              title="Пиццы"
              categoryId={1}
              items={[
                {
                  id: 1,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
                {
                  id: 2,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
                {
                  id: 3,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
                {
                  id: 4,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
                {
                  id: 5,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
                {
                  id: 6,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
              ]}
            />
            <ProductsGroupList
              title="Комбо"
              categoryId={2}
              items={[
                {
                  id: 1,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
                {
                  id: 2,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
                {
                  id: 3,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
                {
                  id: 4,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
                {
                  id: 5,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
                {
                  id: 6,
                  name: 'Пицца - кола',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif',
                  price: 500,
                  items: [{ price: 500 }],
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
