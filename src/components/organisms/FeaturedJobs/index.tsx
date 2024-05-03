import { FC } from 'react';

import TitleSection from '@/components/atoms/TitleSection';
import JobItem from './JobItem';

import { JobType } from '@/types';
import useFeaturedJobs from '@/hooks/useFeaturedJobs';

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
  const { jobs, isLoading, error } = useFeaturedJobs();
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {jobs.map((item: JobType) => (
          <JobItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
