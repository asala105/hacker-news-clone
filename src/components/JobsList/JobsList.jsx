import React, { useState, useEffect } from 'react';
import { Job } from '../Job';
import { GetTimeDifference } from '../../Utils';
import { fetchArticleDetails } from '../../API/API';

export default function JobsList(props) {
  const { currentJobsIds } = props;
  const [jobs, setJobs] = useState([]);

  const getJobsDetails = async (ids) => {
    let jobsDetails = [];
    const jobsPromise = [];
    for (const id of ids) {
      jobsPromise.push(fetchArticleDetails(id));
    }
    const jobsData = await Promise.all(jobsPromise);
    for (const data of jobsData) {
      jobsDetails.push(data.data);
    }
    return jobsDetails;
  };

  const fetchData = async () => {
    let jobsDetails = [];
    const jobsData = await getJobsDetails(currentJobsIds)
    console.log(jobsData);
    for (const data of jobsData) {
      jobsDetails.push(data);
    }
    setJobs(jobsDetails);
  }

  useEffect(() => {
    fetchData();
  }, [currentJobsIds])
  return (
    <div style={{ minHeight: '95vh' }}>
      <table>
        <tbody>
          {jobs.map((job, index) => (
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
