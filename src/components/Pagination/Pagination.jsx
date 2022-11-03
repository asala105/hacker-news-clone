import React from 'react';

export default function Pagination(props) {
  const { itemsPerPage, totalNumberOfItems, currentPage, paginate } = props;

  const lastPage = Math.ceil(totalNumberOfItems / itemsPerPage)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: 'auto',
        fontSize: '0.7rem',
      }}>
      <button className='link pagination-link' onClick={() => { paginate(currentPage - 1) }} disabled={currentPage === 1}>
        prev
      </button>
      <button className='link pagination-link' onClick={() => { paginate(currentPage + 1) }} disabled={currentPage === lastPage}>
        next
      </button>
    </div>
  );
}
