import React from 'react';

export default function Article(props) {
  const { index, title, points, author, time, comments, org } = props;
  return (
    <div>
      <p style={{ fontSize: '0.8rem', display: 'inline' }}>{index}.</p>
      {/* don't forget to add icons */}
      <p
        style={{
          color: '#000000',
          marginLeft: '0.5rem',
          fontSize: '0.8rem',
        }}
        href='#'>
        {title}
      </p>
      {/* filtering */}
      <p style={{ fontSize: '0.6rem', display: 'inline' }}>({org})</p>
      <p style={{ fontSize: '0.5rem' }}>
        {points} points by {/* show user info */}
        <a href='#'>{author}</a> {/* show post details */}
        <a href='#'>{time}</a>
        {/* only works if logged in */}| hide |{/* show post details */}
        <a href='#'>{comments}</a>comments
      </p>
    </div>
  );
}
