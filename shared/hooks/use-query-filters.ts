import React from 'react';
import { useRouter } from 'next/navigation';
import qs from 'qs';

import { Filters } from './use-filters';

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.price,
        sizes: Array.from(filters.sizes),
        pizzaTypes: Array.from(filters.pizzaTypes),
        selectedIngredients: Array.from(filters.selectedIngredients),
      };
      const query = qs.stringify(params, {
        arrayFormat: 'comma',
      });

      router.replace(`?${query}`, {
        scroll: false,
      });
    }
    isMounted.current = true;
  }, [filters]);
};
