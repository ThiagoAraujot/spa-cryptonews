import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputSpace } from "../../components/Input/InputStyled";
import { AuthContainer, Button, Section } from "./AuthenticationStyled";
import { z } from "zod";

export function Authentication() {
  const signupSchema = z.object({});

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm();

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm();

  function inHandleSubmit(data) {
    console.log(data);
  }

  function upHandleSubmit(data) {
    console.log(data);
  }

  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
          <InputSpace
            type="email"
            placeholder="E-mail"
            name="email"
            register={registerSignin}
          />
          <InputSpace
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignin}
          />
          <Button type="submit" name="signin">
            Entrar
          </Button>
        </form>
      </Section>
      <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
          <InputSpace
            type="text"
            placeholder="Nome"
            name="name"
            register={registerSignup}
          />
          <InputSpace
            type="email"
            placeholder="E-mail"
            name="email"
            register={registerSignup}
          />
          <InputSpace type="password" placeholder="Senha" name="password" />
          <InputSpace
            type="password"
            placeholder="Confirmar senha"
            name="password"
            register={registerSignup}
          />
          <Button type="submit" name="signup">
            Cadastrar
          </Button>
        </form>
      </Section>
    </AuthContainer>
  );
}
