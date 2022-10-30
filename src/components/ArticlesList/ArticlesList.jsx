import React from 'react';
import { Article } from '../Article';

export default function ArticlesList(props) {
  const { articleDetails, indexOfFirstArticle } = props;

  return (
    <div style={{ minHeight: '95vh' }}>
      <table>
        <tbody>
          {articleDetails.map((article, index) => (
            <Article
              article={article}
              key={index}
              index={index + indexOfFirstArticle + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
