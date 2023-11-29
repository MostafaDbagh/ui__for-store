import axios from 'axios'

export const Axios = axios.create({
    baseURL: 'http://localhost:4050/', 
    timeout: 5000, // Request timeout in milliseconds
    headers: {
      'Authorization': 'Bearer YourAccessToken', // Custom headers
      'Content-Type': 'application/json', // Example content type
    },
  })

export const getProductApi = async ()=>{
    const response = await Axios.get('products');
    return response.data
}

export const getProductById =  async(id)=>{
    const response = await Axios.get(`products/${id}`);
    return response.data;

}