import { cn } from '@/lib/utils';
import React from 'react';

import { Title } from './title';
import { Button } from '../ui';

interface Props {
  imageUrl: string;
  name: string;
  onCLickAdd?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({ imageUrl, name, onCLickAdd, className }) => {
  const textDetails = '30 см, традиционное тесто';
  return (
    <div className={cn('flex flex-1', className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>
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
