import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useSet } from 'react-use';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  selectedIngredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  price: PriceProps;
  selectedIngredients: Set<string>;
}
interface ReturnProps extends Filters {
  setPrice: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get('selectedIngredients')?.split(',')),
  );

  const [sizes, { toggle: togleSizes }] = useSet(
    new Set<string>(searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : []),
  );

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [],
    ),
  );

  const [price, setPrice] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice((prev) => ({ ...prev, [name]: value }));
  };

  return {
    sizes,
    pizzaTypes,
    price,
    selectedIngredients,
    setPrice: updatePrice,
    setIngredients: toggleIngredients,
    setSizes: togleSizes,
    setPizzaTypes: togglePizzaTypes,
  };
};
