import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { ArticlesList } from '../components/ArticlesList';
import { Footer } from '../components/Footer';
import { fetchArticles } from '../API/API';

export default function HomePage() {
  const [topStories, setTopStories] = useState([]);
  const fetchData = async () => {
    const response = await fetchArticles();
    console.log(response);
    // setTopStories(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
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
