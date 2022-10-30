import './App.css';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import { Layout, HomePage, UserDetails, JobsPage, NewArticlesPage } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Verdana', 'Geneva', 'sans-serif']
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route exact path="user" element={<UserDetails />} />
          <Route exact path="/jobs" element={<JobsPage />} />
          <Route exact path="/:filter" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
