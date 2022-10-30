import React from 'react';

export default function Pagination(props) {
  const { itemsPerPage, totalNumberOfItems, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNumberOfItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: 'auto',
        fontSize: '0.7rem',
      }}>
      {pageNumbers.map((pageNumber, index) => (
        <p
          key={index}
          onClick={() => {
            paginate(pageNumber);
          }}
          className='link pagination-link'>
          {pageNumber}
        </p>
      ))}
    </div>
  );
}
