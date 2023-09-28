import Axios from "../axios/Axios";

export const loginUser = async (email, password) => {
  const response = await Axios.post("user/login", { email, password });
  return response.data;
};

export const verifyOTP = async (email, otp) => {
  const response = await Axios.post("user/verify-otp", { email, otp });
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await Axios.post("user/register", userData);
  return response.data;
};
