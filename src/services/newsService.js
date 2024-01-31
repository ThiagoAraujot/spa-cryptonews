import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-cryptonews.onrender.com";

export function getAllNews(limit) {
  const response = axios.get(`${baseURL}/news?offset=0&limit=${limit}`);
  return response;
}

export function getTopNews() {
  const response = axios.get(`${baseURL}/news/top`);
  return response;
}

export function searchNews(title) {
  const response = axios.get(`${baseURL}/news/search?title=${title}`);
  return response;
}

export function getAllNewsByUser() {
  const response = axios.get(`${baseURL}/news/byUser`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
