import axios, {AxiosResponse} from "axios";

const apiFakeStore = axios.create({
    baseURL: 'https://fakestoreapi.com'
});

export interface Product {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

export const getAllProducts = async ():Promise <Product[]> =>{
    try{
        const response: AxiosResponse<Product[]> = await apiFakeStore.get(`/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products: ', error);
        throw (error);
    }
};

export const getProduct = async ():Promise <Product> =>{
    try{
        const response: AxiosResponse<Product> = await apiFakeStore.get(`/products/1`)
        return response.data;
    } catch (error){
        console.error('Error al obtener el producto ', error);
        throw (error);
    }
}