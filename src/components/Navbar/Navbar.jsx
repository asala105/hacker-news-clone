import React from 'react';
const NavLinkStyle = {
  color: '#000000',
  marginLeft: '0.5rem',
  marginRight: '0.5rem',
  fontSize: '0.8rem',
};
const NavLinkBrand = {
  fontWeight: 'bold',
  fontSize: '1rem',
};

export default function Navbar() {
  return (
    <div style={{ backgroundColor: 'rgb(255,102,0)', height: '3vh' }}>
      <a href='#' style={{ ...NavLinkStyle, ...NavLinkBrand }}>
        Hacker News
      </a>
      |
      <a href='#' style={NavLinkStyle}>
        new
      </a>
      |
      <a href='#' style={NavLinkStyle}>
        past
      </a>
      |
      <a href='#' style={NavLinkStyle}>
        comments
      </a>
      |
      <a href='#' style={NavLinkStyle}>
        ask
      </a>
      |
      <a href='#' style={NavLinkStyle}>
        show
      </a>
      |
      <a href='#' style={NavLinkStyle}>
        jobs
      </a>
      |
      <a href='#' style={NavLinkStyle}>
        submit
      </a>
      <a href='#' style={{ float: 'right', ...NavLinkStyle }}>
        login
      </a>
    </div>
  );
}
