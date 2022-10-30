import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav-bar'>
      <Link to='/news' className='nav-link nav-link-brand'>
        Hacker News
      </Link>
      |
      <Link to='/newest' className='nav-link'>
        {' '}
        new
      </Link>
      |
      <Link to='/front' className='nav-link'>
        {' '}
        past
      </Link>
      |
      <Link to='/newcomments' className='nav-link'>
        {' '}
        comments
      </Link>
      |
      <Link to='/ask' className='nav-link'>
        {' '}
        ask
      </Link>
      |
      <Link to='/show' className='nav-link'>
        {' '}
        show
      </Link>
      |
      <Link to='/jobs' className='nav-link'>
        {' '}
        jobs
      </Link>
      |
      <Link to='/login' className='nav-link'>
        {' '}
        submit
      </Link>
      <Link to='/login' className='nav-link' style={{ float: 'right' }}>
        login
      </Link>
    </div>
  );
}
