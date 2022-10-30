import React, { useState, useEffect, useRef } from 'react';
import { ArticlesList } from '../components/ArticlesList';
import { Footer } from '../components/Footer';
import { fetchArticlesIds, fetchArticleDetails } from '../API/API';
import { Pagination } from '../components/Pagination';

export default function HomePage() {
  const [articlesIds, setArticlesIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [articlesPerPage] = useState(30);
  const dataFetchedRef = useRef(false);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const fetchData = async () => {
    setLoading(true);
    const response = await fetchArticlesIds();
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
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    fetchData();
  }, []);

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
        <h1>Loading...</h1>
      ) : (
        <>
          <ArticlesList
            indexOfFirstArticle={indexOfFirstArticle}
            indexOfLastArticle={indexOfLastArticle}
            currentArticlesIds={currentArticlesIds}
            articleDetails={currentArticles}
          />
          <hr />
          <Pagination
            articlesPerPage={articlesPerPage}
            totalArticles={articlesIds?.length}
            paginate={paginate}
          />
        </>
      )}
      <hr />
      <Footer />
    </div>
  );
}
