import './App.css';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import HomePage from './pages/HomePage';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Verdana', 'Geneva', 'sans-serif']
      }
    });
  }, []);
  return (
    <HomePage />
  );
}

export default App;
