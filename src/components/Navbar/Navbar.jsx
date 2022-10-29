import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div style={{ backgroundColor: 'rgb(255,102,0)', height: '3vh' }}>
      <Link to='#' className='nav-link nav-link-brand'>
        Hacker News
      </Link>
      |
      <Link to='#' className='nav-link'>
        {' '}
        new
      </Link>
      |
      <Link to='#' className='nav-link'>
        {' '}
        past
      </Link>
      |
      <Link to='#' className='nav-link'>
        {' '}
        comments
      </Link>
      |
      <Link to='#' className='nav-link'>
        {' '}
        ask
      </Link>
      |
      <Link to='#' className='nav-link'>
        {' '}
        show
      </Link>
      |
      <Link to='#' className='nav-link'>
        {' '}
        jobs
      </Link>
      |
      <Link to='#' className='nav-link'>
        {' '}
        submit
      </Link>
      <Link to='#' className='nav-link' style={{ float: 'right' }}>
        login
      </Link>
    </div>
  );
}
