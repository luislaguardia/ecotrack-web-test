import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://ecotrack-back.onrender.com/api/news')
      .then((res) => {
        setNews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching news:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="news-container">
      <h2>News & Updates</h2>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {news.map((item) => (
            <li key={item._id}>
              <h4>{item.title}</h4>
              <small>{item.date}</small>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
