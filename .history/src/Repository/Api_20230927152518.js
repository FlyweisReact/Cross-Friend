/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";


const Baseurl = "https://cross-friend.vercel.app/";

export const getProductbyQuery = async (query, setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/allproducts/search?search=${query}`
    );
    const data = response.data.apiFeature;
    setResponse(data);
  } catch {}
};

export const getProductDetail = async (
  id,
  setResponse,
  setImage,
  setReviews
) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/product/${id}`);
    const data = response.data.product;
    const image = response.data.product?.imageUrls?.[0];
    const reviews = response.data.product?.reviews;
    setReviews(reviews);
    setImage(image);
    setResponse(data);
  } catch {}
};

export const getBanner = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/banner/all`);
    const data = response.data.banners;
    setResponse(data);
  } catch {}
};

export const login = async (payload) => {
  try {
    const response = await axios.post(`${Baseurl}api/v1/login/otp`, payload);
    const message = response.data.message;
    const otp = response.data.otp;
    Store.addNotification({
      title: message,
      message: otp,
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  }
};

export const verify_otp = async (payload) => {
    return async (dispatch) => { 
        try {
            const response = await axios.post(
              `${Baseurl}api/v1/verify/login/otp`,
              payload
            );
            const message = response.data.message;
            const token = response.data.token
            localStorage.setItem("Token" , token)
            dispatch(LOGINAUTH(data));
            Store.addNotification({
              title: "",
              message: message,
              type: "success",
              insert: "top",
              container: "top-center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 3000,
                onScreen: true,
              },
            });
          } catch (e) {
            const msg = e.response.data.message;
            Store.addNotification({
              title: "",
              message: msg,
              type: "danger",
              insert: "top",
              container: "top-center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 3000,
                onScreen: true,
              },
            });
          }
    }
};
