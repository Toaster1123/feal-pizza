'use client';
import React from 'react';
import { Title } from './title';
import { Input } from '../ui/input';
import { RangeSlider } from './range-slider';
import { CheckboxFilterGroups } from './checkbox-filter-groups';
import { useFilters, useIngredients, useQueryFilters } from '@/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);
  const updatePrice = (price: number[]) => {
    filters.setPrice('priceFrom', price[0]);
    filters.setPrice('priceTo', price[1]);
  };

  const items = ingredients.map((item) => ({ text: item.name, value: item.id.toString() }));
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <CheckboxFilterGroups
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: 'Тонкое', value: '25' },
          { text: 'Традиционное', value: '30' },
        ]}
      />

      <CheckboxFilterGroups
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: '25см', value: '25' },
          { text: '30см', value: '30' },
          { text: '40см', value: '40' },
        ]}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.price.priceFrom)}
            onChange={(e) => filters.setPrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={filters.price.priceTo}
            onChange={(e) => filters.setPrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={1}
          value={[filters.price.priceFrom || 0, filters.price.priceTo || 1000]}
          onValueChange={updatePrice}
        />
      </div>
      <CheckboxFilterGroups
        name={'ingredients'}
        loading={loading}
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        onClickCheckbox={filters.setIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
