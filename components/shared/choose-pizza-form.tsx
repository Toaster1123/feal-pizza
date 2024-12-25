import { cn } from '@/lib/utils';
import React from 'react';

import { Title } from './title';
import { Button } from '../ui';
import { PizzaImage } from './pizza-image';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any;
  items?: any;
  onCLickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  onCLickAdd,
  className,
}) => {
  const textDetails = '30 см, традиционное тесто';
  const size = 30;
  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#F7F6F5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {1000} ₽
        </Button>
      </div>
    </div>
  );
};
