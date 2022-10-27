import React from 'react';

export default function Article(props) {
  const { index, title, points, author, time, comments, org } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
      <div className='article-number'>
        <span>{index}.</span>
        <a href='#' className='link'>
          &#9650;
        </a>
      </div>
      <div>
        <a href='#' className='article-header'>
          {title}
        </a>
        {/* filtering */}
        <a href='#' className='org-filter'>
          ({org})
        </a>

        <span className='article-brief-description'>
          <a href='#' className='link'>{` ${points} `}</a> points by{' '}
          {/* show user info */}
          <a href='#' className='link'>{` ${author} `}</a>{' '}
          {/* show post details */}
          <a href='#' className='link'>{` ${time} `}</a>
          {/* only works if logged in */}|
          <a href='#' className='link'>
            {' '}
            hide
          </a>{' '}
          |{/* show post details */}
          <a href='#' className='link'>{` ${comments} `}</a>comments
        </span>
      </div>
    </div>
  );
}
