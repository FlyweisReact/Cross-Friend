import axios from 'axios'

const Baseurl = 'https://cross-friend.vercel.app/'

export const getProducts = async (setResponse) => {
    try{    
        const response = await axios.get(`${Baseurl}api/v1/products`)
        setResponse(response)
    }catch{}
}

export const getProductbyQuery = async (query , setResponse) => {
    try{
        const response = await axios.get(`${Baseurl}a?keyword=${query}`)
        const data = response.data.products
        setResponse(data)
    }catch{}
}