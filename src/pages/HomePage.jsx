import React from 'react';
import { Navbar } from '../components/Navbar';
import { ArticlesList } from '../components/ArticlesList';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div
      style={{
        margin: 'auto',
        width: '80%',
        backgroundColor: 'rgb(246,246,239)',
      }}>
      <Navbar />
      <ArticlesList />
      <hr />
      <Footer />
    </div>
  );
}
