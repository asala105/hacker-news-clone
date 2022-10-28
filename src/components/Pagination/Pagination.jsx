import React from 'react';

export default function Pagination(props) {
  const { articlesPerPage, totalArticles, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: 'auto',
      }}>
      {pageNumbers.map((pageNumber) => (
        <a
          onClick={() => {
            paginate(pageNumber);
          }}
          className='link'
          href='#'>
          {pageNumber}
        </a>
      ))}
    </div>
  );
}
