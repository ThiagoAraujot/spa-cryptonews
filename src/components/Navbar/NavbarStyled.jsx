import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  max-width: 100%;
  /*width: 100%;
    position: fixed;
    top: 0;*/
  z-index: 1;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export const ImgLogo = styled.img`
  width: 10rem;
  cursor: pointer;
  object-fit: cover;
`;

export const InputSearch = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;

  button {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: #8d56fb;
      color: #ffff;
      transition: 0.2s ease-in-out;
    }
  }

  input {
    outline: none;
    font-size: 0.8rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;
  }

  input:focus {
    /*border: 1px solid #8d56fb9a;*/
    box-shadow: rgba(90, 90, 99, 0.263) 0px 7px 29px 0px;
    transition: all 0.4s ease-in-out;
  }
`;

export const Button = styled.button`
  background-color: #8d56fb;
  border: none;
  outline: none;
  font-size: 0.7rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  &:hover {
    background-color: #6835cd;
  }
`;

export const ErrorSpan = styled.span`
  background-color: #ffcdcd;
  color: #9e0000;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  border-radius: 7px;
`;

export const UserLoggedSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  gap: 1rem;

  h2 {
    font-size: 1.1rem;
    color: #8d56fb;
    transition: all 0.3s;
    cursor: pointer;
  }

  h2:hover {
    color: #6835cd;
  }

  i {
    font-size: 1.5rem;
    color: #8d56fb;
    cursor: pointer;
  }

  i:hover {
    color: #6835cd;
  }
`;
