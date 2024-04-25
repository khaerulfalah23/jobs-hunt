'use client';

import TitleSection from '@/components/atoms/TitleSection';
import { FC } from 'react';
import JobItem from './JobItem';

interface LatestJobsProps {}

const LatestJobs: FC<LatestJobsProps> = ({}) => {
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs open" />

      <div className="mt-12 grid grid-cols-3 gap-8">
        <JobItem
          image="/images/hero.png"
          jobType="Full time"
          location="Jakarta, Indonesia"
          name="UI/UX Designer"
          type="UI/UX Designer"
          skills={['AdobeXD', 'AdobeXD', 'AdobeXD', 'AdobeXD', 'AdobeXD']}
        />
      </div>
    </div>
  );
};

export default LatestJobs;
