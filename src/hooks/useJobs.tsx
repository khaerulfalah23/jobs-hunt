import { fetcher, parsingJobs } from '@/lib/utils';
import { JobType } from '@/types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

const JOB_PATH = '/api/jobs/filter';

const useJobs = (filter?: string[]) => {
  const paramsCategory = useMemo(() => {
    if (filter && filter.length > 0) {
      return filter.join(',');
    }

    return '';
  }, [filter]);

  const { data, error, isLoading, mutate } = useSWR(
    `${JOB_PATH}?category=${paramsCategory}`,
    fetcher,
    { revalidateOnMount: false }
  );

  const [jobs, setJobs] = useState<JobType[]>([]);

  const parseJobs = useCallback(async () => {
    const parseData = await parsingJobs(data, isLoading, error);
    setJobs(parseData);
  }, [data, isLoading, error]);

  useEffect(() => {
    parseJobs();
  }, [data, isLoading, error]);

  return {
    jobs,
    mutate,
    isLoading,
  };
};

export default useJobs;
