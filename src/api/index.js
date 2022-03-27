import axios from "axios";

const api = {
  baseURL: "https://hshportfolio-api.herokuapp.com",
};

function MyInfoList() {
  return axios.get(`${api.baseURL}/portfolios`);
}

function MyOperationList() {
  return axios.get(`${api.baseURL}/operation`);
}

function MyFront() {
  return axios.get(`${api.baseURL}/fontdevelopment `);
}

export { MyInfoList, MyOperationList, MyFront };
