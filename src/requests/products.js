import { dummyAPI } from "../services/api";

// Task 1
export async function getAllProducts (){
    return await dummyAPI.get("/products");
}
// Task 2
export async function getProductById(id){
    return await dummyAPI.get(`/products/${id}`);
}
