import axios from 'axios'

const Baseurl = 'https://cross-friend.vercel.app/'

export const getProducts = async (setResponse) => {
    try{    
        const response = await axios.get(`${Baseurl}api/v1/products`)
        setResponse(re)
    }catch{}
}
