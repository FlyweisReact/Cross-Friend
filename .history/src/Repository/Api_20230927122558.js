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
        const response = await axios.get(`${Baseurl}api/v1/products?keyword=${query}`)
        console.log()
        const data = 
        setResponse(response)
    }catch{}
}