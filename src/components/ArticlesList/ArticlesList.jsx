import React, { useEffect, useState } from 'react';
import { Article } from '../Article';
import { fetchArticleDetails } from '../../API/API';
import { Oval } from 'react-loading-icons';

export default function ArticlesList(props) {
  const { indexOfFirstArticle, currentArticlesIds } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const getArticlesDetails = async (ids) => {
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

  const fetchData = async () => {
    let articlesDetails = [];
    const articlesData = await getArticlesDetails(currentArticlesIds)
    console.log(articlesData);
    for (const data of articlesData) {
      articlesDetails.push(data);
    }
    setArticles(articlesDetails);
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
    console.log(currentArticlesIds);
  }, [currentArticlesIds])
  return (
    <div style={{ minHeight: '95vh' }}>
      {loading ? (
        <div className='loading-icon'>
          <Oval stroke='rgb(255, 102, 0)' />
        </div>
      ) : (
      <table>
        <tbody>
              {articles.map((article, index) => (
            <Article
              article={article}
              key={index}
              index={index + indexOfFirstArticle + 1}
            />
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
}
