import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  imageUrl: string;
  size: 25 | 30 | 40;
}

export const PizzaImage: React.FC<Props> = ({ className, imageUrl, size }) => {
  return (
    <div className={cn('relative flex items-center justify-center flex-1 w-full', className)}>
      <img
        src={imageUrl}
        alt="product"
        className={cn('relative left-2 top-2 transition-all z-10 duration-300', {
          'w-[300px] h-[300px]': size === 25,
          'w-[400px] h-[400px]': size === 30,
          'w-[500px] h-[500px]': size === 40,
        })}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[370px] h-[370px]"></div>
    </div>
  );
};
