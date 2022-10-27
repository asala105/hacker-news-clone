import React from 'react';
const NavLinkStyle = {
  textDecoration: 'none',
  color: '#000000',
};
export default function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <div>
        <div>Applications are open for YC Winter 2023</div>
        <div>
          <a href='#' style={{ ...NavLinkStyle }}>
            Guidelines
          </a>
          |
          <a href='#' style={NavLinkStyle}>
            FAQ
          </a>
          |
          <a href='#' style={NavLinkStyle}>
            Lists
          </a>
          |
          <a href='#' style={NavLinkStyle}>
            API
          </a>
          |
          <a href='#' style={NavLinkStyle}>
            Security
          </a>
          |
          <a href='#' style={NavLinkStyle}>
            Legal
          </a>
          |
          <a href='#' style={NavLinkStyle}>
            Apply to YC
          </a>
          |
          <a href='#' style={NavLinkStyle}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
