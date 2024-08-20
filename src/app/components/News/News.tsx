"use client";

import { useEffect, useState } from "react";
import { type Article } from "@/app/types";
import "./News.scss";

const getRandomCategory = () => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return categories[Math.floor(Math.random() * categories.length)];
};

const News = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [articleNumber, setArticleNumber] = useState<number>(3);

  const handleNewsData = async () => {
    const category = getRandomCategory();
    try {
      const response = await fetch(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/us.json`
      );
      if (response.ok) {
        const data = await response.json();
        
        if (data.articles.length > 0) {
          setNews((prevArticles) => [...prevArticles, ...data.articles]);
        } else {
          console.error("No data");
        }
      } else {
        console.error("Error fetching data. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleNewsData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setArticleNumber((prev) => prev + 3);
        handleNewsData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [news]);

  return (
    <div className="news-container">
      <input className="input-search" type="text" placeholder="Search" />
      <div className="articles-container">
        <h3 className="news-header">What's happening</h3>
        {news.slice(0, articleNumber).map((article: Article) => {
          return (
            <div key={article.title}>
              <a
                className="articles-content"
                href={article.url}
                target="_blank"
              >
                <div className="articles-content-wrapper">
                  <div>
                    <h4>{article.title}</h4>
                    <p>{article.source.name}</p>
                  </div>
                  <img
                    className="article-image"
                    src={article.urlToImage}
                    alt="Article image"
                    width={370}
                  />
                </div>
              </a>
            </div>
          );
        })}
        <button
          className="news-btn"
          onClick={() => setArticleNumber((prev) => prev + 3)}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default News;
