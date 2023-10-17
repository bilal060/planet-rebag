import axios from "axios";

const Axios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/`,
  withCredentials: true,
});

Axios.interceptors.request.use((request) => {
  document.querySelector(".loading-section").style.display = "flex";
  return request;
});

Axios.interceptors.response.use(
  (response) => {
    document.querySelector(".loading-section").style.display = "none";

    return response;
  },
  (error) => {
    document.querySelector(".loading-section").style.display = "none";
    throw error;
  },
);

export default Axios;
