import axios from 'axios'



export const getProductApi = async ()=>{
    const response = await axios.get('http://localhost:4050/products');
    return response.data
}