import React from 'react';
import { Link } from 'react-router-dom';
import { GetTimeDifference } from '../../Utils';

export default function Article(props) {
  const { article, index } =
    props;

  return (
    <tr>
      <th className='article-number'>
        <span>{index}.</span>
        <a href='#' className='link'>
          &#9650;
        </a>
      </th>
      <td>
        <a href={article.url} className='article-header'>
          {article.title}
        </a>
        {/* filtering */}
        {/* <a href='#' className='org-filter'>
          ({'mused.org'})
        </a> */}

        <span className='article-brief-description'>
          <a href='#' className='link'>{` ${article.score ? article.score : 0} `}</a> points by{' '}
          <Link to={`/user?id=${article.by}`} className='link'>
            {` ${article.by} `}
          </Link>{' '}
          <Link to={`/item?id=${article.id}`} className='link'>{` ${GetTimeDifference(article.time)} `}</Link>
          {/* only works if logged in */}|
          <Link to='/login' className='link'>
            {' '}
            hide
          </Link>
          |{' '}
          <a href='#' className='link'>
            {' '}
            past
          </a>{' '}
          |
          <Link to={`/item?id=${article.id}`} className='link'>{` ${article.kids ? article.kids.length : 0} `}</Link>comments
        </span>
      </td>
    </tr>
  );
}
