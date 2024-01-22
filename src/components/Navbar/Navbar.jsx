import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/Crypto-News-logo.png";
import {
  InputSearch,
  Nav,
  ImgLogo,
  Button,
  ErrorSpan,
  UserLoggedSpace,
} from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "../../schemas/searchSchema";
import { userLogged } from "../../services/userService";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  function signout() {}

  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
  }, []);

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSearch>
            <input {...register("title")} type="text" placeholder="Pesquisar" />
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </InputSearch>
        </form>

        <Link to="/">
          <ImgLogo src={logo} alt="" />
        </Link>

        {user ? (
          <UserLoggedSpace>
            <h2>{user.name}</h2>
            <i className="bi bi-box-arrow-right" onClick={signout}></i>
          </UserLoggedSpace>
        ) : (
          <Link to="/auth">
            <Button type="button">Login</Button>
          </Link>
        )}
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
