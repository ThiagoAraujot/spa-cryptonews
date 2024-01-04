import logo from "../../images/Crypto-News-logo.png";
import { ImgLogo, InputSearch, Nav, Button } from "./NavbarStyled";

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
    </>
  );
}
