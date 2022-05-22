import React, { useState } from "react";
import "../src/FetchNews.css";
import axios from "axios";

const FetchNews = () => {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=0c6f9d72994b45cf83275ab44ae1ee63"
      )
      .then((res) => {
        setNews(res.data.articles);
      });
  };
  return (
    <>
      <div className="div-btn">
        <button className="btn" onClick={fetchNews}>
          Get News
        </button>
        <h4 className="h4">Press the button to get latest news</h4>
      </div>

      {news.map((value) => {
        return (
          <div className="card">
            <img className="img" src={value.urlToImage} alt="" />
            <h2 className="h2">{value.title}</h2>
            <hr className="hr" />
            <p className="p">{value.description}</p>
            <a className="a" href={value.url}>
              Read more →
            </a>
          </div>
        );
      })}
    </>
  );
};

export default FetchNews;
