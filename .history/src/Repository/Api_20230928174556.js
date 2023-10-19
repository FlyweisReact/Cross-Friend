/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
import { LOGIN } from "../Store/Slices/authSlice";

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
  setReviews,
  setQuantity
) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/product/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    const data = response.data;
    const image = response.data.product?.imageUrls?.[0];
    const reviews = response.data.product?.reviews;
    const quantity = response.data?.quantityInCart;
    setQuantity(quantity);
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

export const verify_otp = (payload, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/verify/login/otp`,
        payload
      );
      const message = response.data.message;
      const token = response.data.token;
      localStorage.setItem("Token", token);
      dispatch(LOGIN(token));
      navigate("/");
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
  };
};

export const addToCart = async (payload) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/cart/addTocart`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
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

export const getCart = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/cart/getCart`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    const data = response.data.cart;
    setResponse(data);
  } catch {}
};

export const RemoveItemCart = async (productId, sizeId) => {
  try {
    const response = await axios.delete(
      `${Baseurl}api/v1/cart/delete/product/${productId}/${sizeId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
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

export const increaseQuan = async (payload) => {
  try {
    const response = await axios.put(
      `${Baseurl}api/v1/cart/increase`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
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

export const decreaseQuan = async (payload) => {
  try {
    const response = await axios.put(
      `${Baseurl}api/v1/cart/decrease`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
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

export const addToWishlist = async (payload) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/add/wishlist/${payload}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    Store.addNotification({
      title: "",
      message: "Added to Wishlist",
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

export const getWishlist = async (payload) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/wishlist/me`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    Store.addNotification({
      title: "",
      message: "Added to Wishlist",
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
