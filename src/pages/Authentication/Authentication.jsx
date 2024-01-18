import { InputSpace } from "../../components/Input/InputStyled";
import { AuthContainer, Button, Section } from "./AuthenticationStyled";

export function Authentication() {
  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Entrar</h2>
        <form>
          <InputSpace type="email" placeholder="E-mail" name="email" />
          <InputSpace type="password" placeholder="Senha" name="password" />
          <Button type="submit" name="signin">
            Entrar
          </Button>
        </form>
      </Section>
      <Section type="signup">
        <h2>Cadastrar</h2>
        <form>
          <InputSpace type="text" placeholder="Nome" name="name" />
          <InputSpace type="email" placeholder="E-mail" name="email" />
          <InputSpace type="password" placeholder="Senha" name="password" />
          <InputSpace
            type="password"
            placeholder="Confirmar senha"
            name="password"
          />
          <Button type="submit" name="signup">
            Cadastrar
          </Button>
        </form>
      </Section>
    </AuthContainer>
  );
}
