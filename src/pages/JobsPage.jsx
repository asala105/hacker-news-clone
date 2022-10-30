import React, { useState, useEffect, useRef } from 'react';
import { JobsList } from '../components/JobsList';
import { Footer } from '../components/Footer';
import { fetchArticlesIds, fetchArticleDetails } from '../API/API';
import { Pagination } from '../components/Pagination';
import { Oval } from 'react-loading-icons';

export default function JobsPage() {
  const [jobsIds, setJobsIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobsPerPage] = useState(30);
  const dataFetchedRef = useRef(false);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const fetchData = async () => {
    setLoading(true);
    const response = await fetchArticlesIds('jobs');
    setJobsIds(response.data);

    let jobsDetails = [];
    const jobsPromises = [];

    for (let i = 1; i <= Math.ceil(response.data.length / jobsPerPage); i++) {
      const slicedJobsIds = response.data.slice(
        i * jobsPerPage - jobsPerPage,
        i * jobsPerPage
      );
      if (slicedJobsIds.length) {
        jobsPromises.push(slicedJobsDetails(slicedJobsIds));
      }
    }

    const jobsData = await Promise.all(jobsPromises);
    for (const data of jobsData) {
      for (const item of data) {
        jobsDetails.push(item);
      }
    }
    setJobs([...jobs, ...jobsDetails]);
    setLoading(false);
  };
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    fetchData();
  }, []);

  const slicedJobsDetails = async (ids) => {
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
  const currentJobsIds = jobsIds?.slice(indexOfFirstJob, indexOfLastJob);

  const currentJobs = jobs?.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className='jobs-top-note'>
        {' '}
        These are jobs at YC startups. See more at{' '}
        <a className='link' href='https://www.ycombinator.com/jobs'>
          ycombinator.com/jobs
        </a>
        .
      </div>
      {loading ? (
        <div className='loading-icon'>
          <Oval stroke='rgb(255, 102, 0)' />
        </div>
      ) : (
        <>
          <JobsList
            indexOfFirstJob={indexOfFirstJob}
            indexOfLastJob={indexOfLastJob}
            currentJobsIds={currentJobsIds}
            jobsDetails={currentJobs}
          />
          <hr />
          <Pagination
            itemsPerPage={jobsPerPage}
            totalNumberOfItems={jobsIds?.length}
            paginate={paginate}
          />
        </>
      )}
      <hr />
      <Footer />
    </div>
  );
}
