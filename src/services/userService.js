import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function signUp(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username: generateUsername(data.name),
    avatar: "https://i.imgur.com/xmI2QAo.jpg",
    background: "https://i.imgur.com/XbRg9D7.png",
  };
  const response = axios.post(`${baseURL}/user/create`, body);
  return response;
}

export function signIn(data) {
  const response = axios.post(`${baseURL}/auth/`, data);
  return response;
}

export function userLogged() {
  const response = axios.get(`${baseURL}/user/findById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    }
  });
  return response;
}

function generateUsername(name) {
  const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}
