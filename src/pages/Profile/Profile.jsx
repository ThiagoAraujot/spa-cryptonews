import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfileNews,
  ProfileUser,
} from "./ProfileStyled.jsx";
import { getAllNewsByUser } from "../../services/newsService";
import { Card } from "../../components/Card/Card.jsx";

export function Profile() {
  const { user } = useContext(UserContext);
  const [news, setNews] = useState([]);

  async function findAllNewsByUser() {
    const newsresponse = await getAllNewsByUser();
    setNews(newsresponse.data.results);
  }

  useEffect(() => {
    findAllNewsByUser();
  }, []);

  findAllNewsByUser();

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <i className="bi bi-pencil-square"></i>
        </ProfileIconEdit>

        <ProfileBackground src={user.background} />

        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>
        </ProfileUser>

        <ProfileActions>
          <ProfileIconAdd>
            <i className="bi bi-plus-circle"></i>
          </ProfileIconAdd>
        </ProfileActions>
      </ProfileHeader>

      <ProfileNews>
        {news.length === 0 && <h3>Você ainda não postou nenhuma notícia...</h3>}
        {news.map((post) => {
          return (
            <Card
              key={post.id}
              title={post.title}
              text={post.text}
              banner={post.banner}
              likes={post.likes}
              comments={post.comments}
            />
          );
        })}
      </ProfileNews>
    </ProfileContainer>
  );
}
