import axios from "axios";
import cogoToast from "cogo-toast";
import { calculateErrorMessageFromResponse } from "../../helpers/reusableHelperMethods";
import apiUrl from "./apiUrl";

//request interceptor that will add auth token to every request
axios.interceptors.request.use(function (config) {
  // const token = Auth.getAccessToken();
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});
//Any Request to Server
export function AppWebRequest(endUrl, method, config) {
  return new Promise((resolve, reject) => {
    const defaultConfig = {
      url: endUrl,
      method: method || "get",
      baseURL: apiUrl.API_URL,
    };
    const finalConfig = Object.assign(defaultConfig, config || {});
    axios(finalConfig)
      .then((response) => {
        console.log("response", response);
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            cogoToast.error("Your session is invalid. Please log in again");
            //Logout the user from here by seeting state to null, upto you
          }
          var errorObj = {};
          console.log("error", error.response);
          var err = error.response.data;
          if (typeof err == "object") {
            err.message = calculateErrorMessageFromResponse(err);
            errorObj = { ...err };
          } else if (typeof err == "string") {
            errorObj = {
              message: err,
            };
          }
          reject(errorObj);
        } else if (error.request) {
          const err = new Error("Can not made request to server.");
          reject(err);
        } else {
          error.message = "Unexpected error occured!!!";
          reject(error);
        }
      });
  });
}
