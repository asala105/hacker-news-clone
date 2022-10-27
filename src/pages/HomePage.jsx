import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import ArticlesList from '../components/ArticlesList';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div
      style={{
        margin: 'auto',
        width: '80%',
        backgroundColor: 'rgb(246,246,239)',
      }}>
      <NavbarComponent />
      <ArticlesList />
      <hr />
      <Footer />
    </div>
  );
}
