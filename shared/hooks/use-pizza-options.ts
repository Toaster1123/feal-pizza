import React from 'react';
import { PizzaSize, PizzaType } from '../constants/pizza';
import { useSet } from 'react-use';
import { ProductItem } from '@prisma/client';
import { Variant } from '../components/shared/group-variants';
import { getAvailablePizzaSizes } from '../lib';

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
  availableSizes: Variant[];
  currentItemId: number;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
}
export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(25);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));

  const availableSizes = getAvailablePizzaSizes(items, type);

  const currentItemId = items.find((item) => item.pizzaType == type && item.size == size)?.id;

  React.useEffect(() => {
    const isAvailableSize = availableSizes.find(
      (item) => Number(item.value) == size && !item.disabled,
    );
    const avialableSize = availableSizes.find((item) => !item.disabled);
    if (!isAvailableSize && avialableSize) {
      setSize(Number(avialableSize.value) as PizzaSize);
    }
  }, [type]);
  return {
    size,
    type,
    selectedIngredients,
    addIngredient,
    availableSizes,
    currentItemId,
    setSize,
    setType,
  };
};
