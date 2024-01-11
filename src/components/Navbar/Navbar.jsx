import { Outlet } from "react-router-dom";
import logo from "../../images/Crypto-News-logo.png";
import { InputSearch, Nav, ImgLogo, Button } from "./NavbarStyled";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSearch>
          <input type="text" placeholder="Pesquisar" />
          <i className="bi bi-search"></i>
        </InputSearch>

        <ImgLogo src={logo} alt="" />

        <Button>Login</Button>
      </Nav>
      <Outlet />
    </>
  );
}
