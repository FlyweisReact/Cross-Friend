/** @format */

import axios from "axios";

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


export const getBanner = async (setResponse) => {
    try{
        const response = await axios.get(`${Baseurl}api/v1/banner/all`)
        console.log(response)
    }catch{}
}