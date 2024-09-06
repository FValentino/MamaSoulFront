import axios, { AxiosResponse } from 'axios';


const apiFakeStore = axios.create({
  baseURL: 'https://fakestoreapi.com',
});


export type Category = string;

export interface Product {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

export const getCategories = async (): Promise <Category[]> => {
    try {
        const response: AxiosResponse <Category[]> = await apiFakeStore.get(`/products/categories`);
        return response.data;
    } catch (error){
        console.error('Error al obtener las categorias ', error);
        throw (error);
        
    }
}