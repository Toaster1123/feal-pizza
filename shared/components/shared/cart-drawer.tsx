'use client';
import Link from 'next/link';
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import { Button } from '../ui';
import { CartDrawerItem } from './cart-drawer-item';
import { getCartItemDetais } from '@/shared/lib';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import Image from 'next/image';
import { Title } from './title';
import { cn } from '@/shared/lib/utils';
import { useCart } from '@/shared/hooks';

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { totalAmount, items, onClickCountButton, removeCartItem } = useCart();
  const [redirecting, setRedirecting] = React.useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee] select-none">
        <div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
          <SheetHeader className={!totalAmount && 'hidden'}>
            <SheetTitle>
              В корзине <span className="font-bold">{items.length} товара</span>
            </SheetTitle>
          </SheetHeader>

          {!totalAmount && (
            <div className="flex flex-col items-center justify-center w-72 mx-auto">
              <Image src="/assets/images/empty-box.png" width={120} height={120} alt="empty cart" />
              <Title size="sm" text="Корзина пустая" className="text-center font-bold my-2" />
              <p className="text-center text-neutral-500 mb-5">
                Добавьте товары в корзину, чтобы оформить заказ
              </p>
              <SheetClose>
                <div className="inline-flex items-center justify-center whitespace-nowrap active:translate-y-[1px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8 w-56 h-12 text-base">
                  <ArrowLeft className="w-5 mr-2" />
                  Вернуться назад
                </div>
              </SheetClose>
            </div>
          )}

          {totalAmount > 0 && (
            <>
              <div className="-mx-6 mt-5 overflow-auto flex-1">
                {items.map((item) => (
                  <div className="mb-2" key={item.id}>
                    <CartDrawerItem
                      id={item.id}
                      imageUrl={item.imageUrl}
                      details={getCartItemDetais(
                        item.ingredients,
                        item.pizzaSize as PizzaSize,
                        item.pizzaType as PizzaType,
                      )}
                      name={item.name}
                      disabled={item.disabled}
                      price={item.price}
                      quantity={item.quantity}
                      onClickCountButton={(type) =>
                        onClickCountButton(item.id, item.quantity, type)
                      }
                      onClickRemove={() => removeCartItem(item.id)}
                    />
                  </div>
                ))}
              </div>
              <SheetFooter className="-mx-6 bg-white p-8">
                <div className="w-full">
                  <div className="flex mb-4">
                    <span className="flex flex-1 text-lg text-neutral-500">
                      Итого
                      <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                    </span>

                    <span className="font-bold text-lg">{totalAmount} ₽</span>
                  </div>

                  <Link href="/checkout">
                    <Button
                      onClick={() => setRedirecting(true)}
                      loading={redirecting}
                      type="submit"
                      className="w-full h-12 text-base">
                      Оформить заказ
                      <ArrowRight className="w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
