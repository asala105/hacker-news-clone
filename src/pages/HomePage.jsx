import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { ArticlesList } from '../components/ArticlesList';
import { Footer } from '../components/Footer';
import { fetchArticles } from '../API/API';
import { Pagination } from '../components/Pagination';

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(30);
  const fetchData = async () => {
    const response = await fetchArticles();
    console.log(response);
    setArticles(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles?.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div
      style={{
        margin: 'auto',
        width: '80%',
        backgroundColor: 'rgb(246,246,239)',
      }}>
      <Navbar />
      <ArticlesList articles={currentArticles} />
      <hr />
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles?.length}
        paginate={paginate}
      />
      <hr />
      <Footer />
    </div>
  );
}
