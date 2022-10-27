import React from 'react';

export default function Navbar() {
  return (
    <div style={{ backgroundColor: 'rgb(255,102,0)', height: '3vh' }}>
      <a href='#' className='nav-link nav-link-brand'>
        Hacker News
      </a>
      |
      <a href='#' className='nav-link'>
        new
      </a>
      |
      <a href='#' className='nav-link'>
        past
      </a>
      |
      <a href='#' className='nav-link'>
        comments
      </a>
      |
      <a href='#' className='nav-link'>
        ask
      </a>
      |
      <a href='#' className='nav-link'>
        show
      </a>
      |
      <a href='#' className='nav-link'>
        jobs
      </a>
      |
      <a href='#' className='nav-link'>
        submit
      </a>
      <a href='#' className='nav-link' style={{ float: 'right' }}>
        login
      </a>
    </div>
  );
}
