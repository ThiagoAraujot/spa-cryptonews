import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/Crypto-News-logo.png";
import { InputSearch, Nav, ImgLogo, Button } from "./NavbarStyled";
import { useForm } from "react-hook-form";

export function Navbar() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }
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

        <Button>Login</Button>
      </Nav>
      <Outlet />
    </>
  );
}
