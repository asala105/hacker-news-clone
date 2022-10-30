import React from 'react';

export default function Job(props) {
  const { title, titleLink, time, org } = props;

  return (
    <tr>
      <td>
        <a href={titleLink} className='article-header'>
          {title}
        </a>
        {/* filtering */}
        <a href='#' className='org-filter'>
          ({org})
        </a>

        <span className='article-brief-description'>
          <a href='#' className='link'>{` ${time} `}</a>
        </span>
      </td>
    </tr>
  );
}
