import React, { useState, useEffect, useRef } from 'react';
import { ArticlesList } from '../components/ArticlesList';
import { Footer } from '../components/Footer';
import { fetchArticlesIds, fetchArticleDetails } from '../API/API';
import { Pagination } from '../components/Pagination';
import { Oval } from 'react-loading-icons';
import { useParams } from 'react-router-dom';
import { groupArticlesByDate } from '../Utils';
import { DateFilter } from '../components/DateFilter';
import moment from 'moment';

export default function HomePage() {
  const [articlesIds, setArticlesIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [dateFilter, setDateFilter] = useState(moment().subtract(1, 'days').format('MMMM DD, YYYY'));
  const [articlesPerPage] = useState(30);

  const { filter } = useParams();

  const changeDateFilter = (direction, duration) => {
    const tempDate = moment(dateFilter, 'MMMM DD, YYYY');
    if (direction === 'forward') {
      tempDate.add(1, duration);
    } else {
      tempDate.subtract(1, duration);
    }
    setDateFilter(tempDate.format('MMMM DD, YYYY'))
  }
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const fetchData = async () => {
    setLoading(true);
    const response = await fetchArticlesIds(filter);
    setArticlesIds(response.data);

    let articlesDetails = [];
    const articlesPromises = [];

    for (
      let i = 1;
      i <= Math.ceil(response.data.length / articlesPerPage);
      i++
    ) {
      const slicedArticlesIds = response.data.slice(
        i * articlesPerPage - articlesPerPage,
        i * articlesPerPage
      );
      if (slicedArticlesIds.length) {
        articlesPromises.push(slicedArticlesDetails(slicedArticlesIds));
      }
    }

    const articlesData = await Promise.all(articlesPromises);
    for (const data of articlesData) {
      for (const item of data) {
        articlesDetails.push(item);
      }
    }
    setArticles([...articles, ...articlesDetails]);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
    const articlesByDate = groupArticlesByDate(articles)
    console.log(articlesByDate)
  }, [filter]);

  useEffect(() => { console.log(dateFilter); }, [dateFilter]);
  const slicedArticlesDetails = async (ids) => {
    let articlesDetails = [];
    const articlesPromise = [];
    for (const id of ids) {
      articlesPromise.push(fetchArticleDetails(id));
    }
    const articlesData = await Promise.all(articlesPromise);
    for (const data of articlesData) {
      articlesDetails.push(data.data);
    }
    return articlesDetails;
  };
  const currentArticlesIds = articlesIds?.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const currentArticles = articles?.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      {loading ? (
        <div className='loading-icon'>
          <Oval stroke='rgb(255, 102, 0)' />
        </div>
      ) : (
        <>
            {filter === 'front' &&
              <DateFilter date={dateFilter} changeDateFilter={changeDateFilter} />
            }
          <ArticlesList
            indexOfFirstArticle={indexOfFirstArticle}
            indexOfLastArticle={indexOfLastArticle}
            currentArticlesIds={currentArticlesIds}
            articleDetails={currentArticles}
          />
          <hr />
          <Pagination
            itemsPerPage={articlesPerPage}
            totalNumberOfItems={articlesIds?.length}
            paginate={paginate}
          />
        </>
      )}
      <hr />
      <Footer />
    </div>
  );
}
