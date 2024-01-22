import { useEffect, useState } from "react";

import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllNews, getTopNews } from "../../services/newsService.js";
import { HomeBody, HomeHeader } from "./HomeStyled.js";
import Cookies from "js-cookie";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNew, setTopNew] = useState({});

  async function findNews() {
    const newsResponse = await getAllNews();
    setNews(newsResponse.data.results);

    const topNewsResponse = await getTopNews();
    setTopNew(topNewsResponse.data.news);
  }

  useEffect(() => {
    findNews();
  }, []);

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
    </>
  );
}
