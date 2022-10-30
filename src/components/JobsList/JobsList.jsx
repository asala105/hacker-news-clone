import React from 'react';
import { Job } from '../Job';
import { GetTimeDifference } from '../../Utils';

export default function JobsList(props) {
  const { jobsDetails } = props;

  return (
    <div style={{ minHeight: '95vh' }}>
      <table>
        <tbody>
          {jobsDetails.map((job, index) => (
            <Job
              key={index}
              title={job.title}
              titleLink={job.url}
              org={'mused.org'}
              time={GetTimeDifference(job.time)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
