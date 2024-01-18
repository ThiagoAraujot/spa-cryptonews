import styled from "styled-components";

export const AuthContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 400px;
  padding: 2rem;
  gap: 1rem;
  background-color: ${(props) =>
    props.type === "signin" ? "#8d56fb" : "white"};
  color: ${(props) => (props.type === "signup" ? "#8d56fb" : "white")};
  border-radius: ${(props) =>
    props.type === "signin" ? ".5rem 0 0 .5rem" : "0 .5rem .5rem 0"};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  padding: 0.7rem;
  width: 100%;
  border: none;
  border-radius: 7px;
  font-size: 1rem;
  background-color: ${(props) =>
    props.name === "signin" ? "#ffff" : "#8d56fb"};
  font-weight: 500;
  letter-spacing: 0.1rem;
  outline: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  color: ${(props) => (props.name === "signin" ? "#000" : "#fff")};

  &:hover {
    background-color: ${(props) =>
      props.name === "signin" ? "#fff" : "#8d56fb"};
    /*color: ${(props) => (props.name === "signin" ? "#000" : "#fff")};*/
    transform: scale(0.98);
  }
`;
