import { FC } from 'react';

import TitleSection from '@/components/atoms/TitleSection';
import JobItem from './JobItem';

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        <JobItem
          category={{
            id: '1',
            name: 'Design',
            totalJobs: 2000,
          }}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, autem."
          image="/images/jobox.png"
          jobType="Full time"
          location="Jakarta, Indonesia"
          name="UI/UX Designer"
          type="UI/UX Designer"
          skills={['AdobeXD', 'AdobeXD', 'AdobeXD', 'AdobeXD', 'AdobeXD']}
          id={''}
          needs={0}
          applicants={0}
        />
      </div>
    </div>
  );
};

export default FeaturedJobs;
