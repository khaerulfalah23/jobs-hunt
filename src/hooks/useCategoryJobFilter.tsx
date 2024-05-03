import { fetcher, parsingCategoriesToOptions } from '@/lib/utils';
import { filterFormType } from '@/types';
import { useMemo } from 'react';
import useSWR from 'swr';

const useCategoryJobFilter = () => {
  const { data, error, isLoading } = useSWR('/api/jobs/categories', fetcher);

  const categories = useMemo(
    () => parsingCategoriesToOptions(data, isLoading, error),
    [data, error, isLoading]
  );

  const filters = useMemo(() => {
    return [
      {
        name: 'categories',
        label: 'Categories',
        items: categories,
      },
    ] as filterFormType[];
  }, [categories]);

  return {
    filters,
  };
};

export default useCategoryJobFilter;
