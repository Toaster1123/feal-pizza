import React from 'react';
import { WhiteBlock } from './white-block';
import { CheckoutItemDetails } from './checkout-item-details';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button } from '../ui';

interface Props {
  totalAmount: number;
}

export const CheckoutSlidebar: React.FC<Props> = ({ totalAmount }) => {
  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        <span className="text-[34px] font-extrabold">
          {totalAmount + Math.round(totalAmount * 0.15)} ₽
        </span>
      </div>
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package className="mr-2 text-gray-400 " size={18} />
            Стоимость корзины:
          </div>
        }
        value={totalAmount}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent className="mr-2 text-gray-400 " size={18} />
            Налоги:
          </div>
        }
        value={Math.round(totalAmount * 0.05)}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck className="mr-2 text-gray-400 " size={18} />
            Доставка:
          </div>
        }
        value={Math.round(totalAmount * 0.1)}
      />
      <Button type="submit" className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
        Перейти к оплате
        <ArrowRight className="ml-2 w-5" size={20} />
      </Button>
    </WhiteBlock>
  );
};
