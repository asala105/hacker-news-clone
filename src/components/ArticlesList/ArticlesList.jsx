import React, { useState } from 'react';
import { useEffect } from 'react';
import { Article } from '../Article';
import { fetchArticleDetails } from '../../API/API';
import { GetTimeDifference } from '../../Utils';

export default function ArticlesList(props) {
  const { currentArticlesIds, indexOfFirstArticle } = props;
  const [articles, setCurrentArticles] = useState([]);
  const getArticlesDetails = async () => {
    const articlesDetails = [];
    for (const id of currentArticlesIds) {
      const articleDetails = await fetchArticleDetails(id);

      articlesDetails.push(articleDetails.data);
    }
    setCurrentArticles(articlesDetails);
  };
  useEffect(() => {
    getArticlesDetails();
  }, [currentArticlesIds]);

  return (
    <div style={{ minHeight: '95vh' }}>
      {articles.map((article, index) => (
        <Article
          key={index}
          index={index + indexOfFirstArticle + 1}
          title={article.title}
          titleLink={article.url}
          org={'mused.org'}
          points={article.score ? article.score : 0}
          author={article.by}
          time={GetTimeDifference(article.time)}
          comments={article.kids ? article.kids.length : 0}
        />
      ))}
    </div>
  );
}
