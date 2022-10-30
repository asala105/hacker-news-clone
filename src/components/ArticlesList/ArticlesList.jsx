import React from 'react';
import { Article } from '../Article';
import { GetTimeDifference } from '../../Utils';

export default function ArticlesList(props) {
  const { articleDetails, indexOfFirstArticle } = props;

  return (
    <div style={{ minHeight: '95vh' }}>
      <table>
        <tbody>
          {articleDetails.map((article, index) => (
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
        </tbody>
      </table>
    </div>
  );
}
