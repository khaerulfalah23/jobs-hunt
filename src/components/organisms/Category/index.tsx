'use client';

import useSWR from 'swr';

import TitleSection from '@/components/atoms/TitleSection';
import CategoryItem from './Categoryitem';
import { fetcher, parsingCategories } from '../../../lib/utils';
import { categoryJobType } from '@/types';
import { FC, useMemo } from 'react';

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  const { data, isLoading, error } = useSWR('/api/jobs/categories', fetcher);

  const categories = useMemo(
    () => parsingCategories(data, isLoading, error),
    [data, isLoading, error]
  );

  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {categories.map((item: categoryJobType) => (
          <CategoryItem
            key={item.id}
            name={item.name}
            totalJobs={item.totalJobs}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
