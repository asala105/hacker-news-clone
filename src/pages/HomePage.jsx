import React, { useState, useEffect } from 'react';
import { ArticlesList } from '../components/ArticlesList';
import { Footer } from '../components/Footer';
import { fetchArticlesIds } from '../API/API';
import { Pagination } from '../components/Pagination';
import { Oval } from 'react-loading-icons';
import { useParams } from 'react-router-dom';
// import { groupArticlesByDate } from '../Utils';
import { DateFilter } from '../components/DateFilter';
import moment from 'moment';

export default function HomePage() {
  const [articlesIds, setArticlesIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [articlesByDate, setArticlesByDate] = useState(new Map());
  const [dateFilter, setDateFilter] = useState(moment().subtract(1, 'days').format('MMMM DD, YYYY'));
  const [articlesPerPage] = useState(30);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

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

  const fetchData = async () => {
    setLoading(true);
    const response = await fetchArticlesIds(filter);
    setArticlesIds(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [filter]);

  // useEffect(() => {
  //   if (dateFilter && filter === 'front') {
  //     const articlesGroupedByDate = groupArticlesByDate(articles)
  //     setArticlesByDate(articlesGroupedByDate)
  //   }
  // }, [dateFilter, filter]);

  const currentArticlesIds = articlesIds?.slice(
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
          />
          <hr />
          <Pagination
            itemsPerPage={articlesPerPage}
              totalNumberOfItems={articlesIds?.length}
              paginate={paginate}
              currentPage={currentPage}
          />
        </>
      )}
      <hr />
      <Footer />
    </div>
  );
}
