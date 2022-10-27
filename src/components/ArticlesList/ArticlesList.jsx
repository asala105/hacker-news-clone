import React from 'react';
import { Article } from '../Article';

export default function ArticlesList() {
  return (
    <div style={{ minHeight: '95vh' }}>
      <Article
        index={1}
        title={
          'Show HN: I 3D scanned the interior of the Great Pyramid at Giza'
        }
        org={'mused.org'}
        points={683}
        author={'lukehollis'}
        time={'4 hours ago'}
        comments={12}
      />
    </div>
  );
}
