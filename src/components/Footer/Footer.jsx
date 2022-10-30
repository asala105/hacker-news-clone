import React from 'react';

export default function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
      }}>
      <div>
        <div>
          <a
            className='article-header'
            href='https://www.ycombinator.com/apply/'>
            Applications are open for YC Winter 2023
          </a>
        </div>
        <div>
          <p className='footer-links-wrapper '>
            <a href='#' className='footer-links'>
              Guidelines
            </a>
            |
            <a href='#' className='footer-links'>
              FAQ
            </a>
            |
            <a href='#' className='footer-links'>
              Lists
            </a>
            |
            <a href='#' className='footer-links'>
              API
            </a>
            |
            <a href='#' className='footer-links'>
              Security
            </a>
            |
            <a href='#' className='footer-links'>
              Legal
            </a>
            |
            <a href='#' className='footer-links'>
              Apply to YC
            </a>
            |
            <a href='#' className='footer-links'>
              Contact
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
