import axios from "axios";

const api = {
  baseURL: "https://hshportfolio-api.herokuapp.com/portfolios",
};

function MyInfoList() {
  return axios.get(api.baseURL);
}

export { MyInfoList };
