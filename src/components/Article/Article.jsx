import React from 'react';
import { Link } from 'react-router-dom';

export default function Article(props) {
  const { index, title, titleLink, points, author, time, comments, org } =
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
        <a href={titleLink} className='article-header'>
          {title}
        </a>
        {/* filtering */}
        <a href='#' className='org-filter'>
          ({org})
        </a>

        <span className='article-brief-description'>
          <a href='#' className='link'>{` ${points} `}</a> points by{' '}
          {/* show user info */}
          <Link to={`/user?id=${author}`} className='link'>
            {` ${author} `}
          </Link>{' '}
          {/* show post details */}
          <a href='#' className='link'>{` ${time} `}</a>
          {/* only works if logged in */}|
          <a href='#' className='link'>
            {' '}
            hide
          </a>{' '}
          |{' '}
          <a href='#' className='link'>
            {' '}
            past
          </a>{' '}
          |{/* show post details */}
          <a href='#' className='link'>{` ${comments} `}</a>comments
        </span>
      </td>
    </tr>
  );
}
