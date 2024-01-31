import { useEffect, useState } from "react";

import { Card } from "../../components/Card/Card";
import { getAllNews, getTopNews } from "../../services/newsService.js";
import { Footer, HomeBody, HomeHeader } from "./HomeStyled.jsx";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNew, setTopNew] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  async function findNews() {
    const newsResponse = await getAllNews(currentPage);
    setNews(newsResponse.data.results);

    const topNewsResponse = await getTopNews();
    setTopNew(topNewsResponse.data.news);
  }

  useEffect(() => {
    findNews();

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setTimeout(() => {
          setCurrentPage(
            (currentPageInsideState) => currentPageInsideState + 5
          );
        }, 900);
      }
    });

    intersectionObserver.observe(document.querySelector("#sentinela"));

    return () => intersectionObserver.disconnect();
  }, [currentPage]);

  return (
    <>
      <HomeHeader>
        <Card
          top="true"
          title={topNew.title}
          text={topNew.text}
          banner={topNew.banner}
          likes={topNew.likes}
          comments={topNew.comments}
        />
      </HomeHeader>
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody>
      <Footer id="sentinela"></Footer>
    </>
  );
}
