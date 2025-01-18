import React from 'react';
import { WhiteBlock } from './white-block';
import { CheckoutItemDetails } from './checkout-item-details';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button, Skeleton } from '../ui';
import { cn } from '@/shared/lib/utils';

interface Props {
  totalAmount: number;
  loading: boolean;

  className?: string;
}

export const CheckoutSlidebar: React.FC<Props> = ({ totalAmount, loading, className }) => {
  return (
    <WhiteBlock className={cn('p-6 sticky top-4', className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        {loading ? (
          <Skeleton className="w-48 h-11 bg-gray-200" />
        ) : (
          <span className="text-[34px] h-11 font-extrabold">
            {totalAmount + Math.round(totalAmount * 0.15)} ₽
          </span>
        )}
      </div>
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package className="mr-2 text-gray-400 " size={18} />
            Стоимость корзины:
          </div>
        }
        value={loading ? <Skeleton className="w-14 h-7 bg-gray-200" /> : `${totalAmount} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent className="mr-2 text-gray-400 " size={18} />
            Налоги:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="w-14 h-7 bg-gray-200" />
          ) : (
            `${Math.round(totalAmount * 0.05)} ₽`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck className="mr-2 text-gray-400 " size={18} />
            Доставка:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="w-14 h-7 bg-gray-200" />
          ) : (
            `${Math.round(totalAmount * 0.1)} ₽`
          )
        }
      />
      <Button
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
        Оформить заказ
        <ArrowRight className="ml-2 w-5" size={20} />
      </Button>
    </WhiteBlock>
  );
};
