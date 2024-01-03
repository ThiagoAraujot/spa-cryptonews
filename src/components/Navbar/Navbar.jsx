import logo from "../../images/Crypto-News-logo.png";
import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <nav>
        <div className="input-search-space">
          <input type="text" placeholder="Pesquisar"/>
          <i className="bi bi-search"></i>
        </div>

        <img src={logo} alt="" />

        <button>Login</button>
      </nav>
    </>
  );
}
