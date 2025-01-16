import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  title?: React.ReactNode;
  value?: number;
  className?: string;
}

export const CheckoutItemDetails: React.FC<Props> = ({ title, value, className }) => {
  return (
    <div className={cn('flex my-4', className)}>
      <span className="flex flex-1 text-neutral-500text-lg">
        {title}
        <div className="flex-1 bottom-6 border-dashed border-b-[1px] border-b-neutral-200 relative -top-1 mx-2" />
      </span>
      <span className="text-lg font-bold">{value} ₽</span>
    </div>
  );
};
