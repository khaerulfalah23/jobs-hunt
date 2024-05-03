'use client';

import ExploreDataContainer from '@/containers/ExploreDataContainer';
import useCategoryJobFilter from '@/hooks/useCategoryJobFilter';
import useJobs from '@/hooks/useJobs';
import { formFilterSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function FindJobsPage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const { filters } = useCategoryJobFilter();

  const [categories, setCategories] = useState<string[]>([]);

  const { jobs, isLoading, mutate } = useJobs(categories);

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    setCategories(val.categories);
  };

  useEffect(() => {
    mutate();
  }, [categories]);

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={filters}
      title="dream job"
      subtitle="Find your next career at companies like HubSpot, Nike,
    and Dropbox"
      loading={isLoading}
      type="job"
      data={jobs}
    />
  );
}
