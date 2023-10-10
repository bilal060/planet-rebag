import * as actionTypes from "./actionTypes";
import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";

// export const loginUser = async (email, password) => {
//   const response = await Axios.post("user/login", { email, password });
//   return response.data;
// };

export const userLogin = (data, navigation) => (dispatch) => {
  Axios.post("user/login", data)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_LOGIN,
        payload: response.data,
      });
      navigation("/home");
      Toast.success(response.data.status);
    })
    .catch((error) => {
      Toast.error(error.response.data.message);
    });
  console.log(data);
};

export const userSignup =
  (data, selectedLoginOption, navigation) => (dispatch) => {
    const registrationData = {
      role: "user",
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };
    const signupEndpoint =
      selectedLoginOption === "email"
        ? "user/signup/email"
        : "user/signup/mobile";

    Axios.post(signupEndpoint, registrationData)
      .then((response) => {
        dispatch({
          type: actionTypes.USER_SIGNUP,
          payload: response.data,
        });
        if (selectedLoginOption === "email") {
          navigation("/otpmail");
        } else if (selectedLoginOption === "mobile") {
          navigation("/otpmobile");
        }

        Toast.success(response.data.status);
      })
      .catch((error) => {
        console.error("Signup Error", error);
        Toast.error(error.response.data.message);
      });
  };
