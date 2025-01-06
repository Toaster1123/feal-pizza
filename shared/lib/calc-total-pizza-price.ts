import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSize, PizzaType } from '../constants/pizza';

/**
 * Функция для подсчёта общей стоимости пиццы
 *
 * @param type - тип пиццы
 * @param size - размер пиццы
 * @param items - список вариаций пиццы
 * @param ingredients - список ингредиентов пиццы
 * @param selectedIngredients - список выбранных ингредиентов
 *
 * @returns цена общей стоимости
 */

export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const pizzaPrice = items.find((item) => item.pizzaType == type && item.size == size)?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  return pizzaPrice + totalIngredientsPrice;
};
