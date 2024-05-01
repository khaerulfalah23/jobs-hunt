'use client';

import ExploreDataContainer from '@/containers/ExploreDataContainer';
import { formFilterSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function FindJobsPage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const [categories, setCategories] = useState<string[]>([]);

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    setCategories(val.categories);
  };
  const filters: any = [
    {
      name: 'Categories',
      options: [
        { value: 'Full Time', label: 'Full Time' },
        { value: 'Part Time', label: 'Part Time' },
        { value: 'Contract', label: 'Contract' },
        { value: 'Internship', label: 'Internship' },
        { value: 'Freelance', label: 'Freelance' },
      ],
    },
  ];

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={filters}
      title="dream job"
      subtitle="Find your next career at companies like HubSpot, Nike,
			and Dropbox"
      // loading={isLoading}
      type="job"
      // data={jobs}
    />
  );
}
