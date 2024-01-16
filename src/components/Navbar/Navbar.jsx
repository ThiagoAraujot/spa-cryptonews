import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/Crypto-News-logo.png";
import { InputSearch, Nav, ImgLogo, Button, ErrorSpan } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "A pesquisa não pode ser vazia!" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "A pesquisa não pode ter apenas espaços!",
    }),
});

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
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
