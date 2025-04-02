import axios from "axios";
export const dummyAPI = axios.create({baseURL:"https://dummyjson.com",})

// const instance = axios.create({
//     baseURL: 'https://dummyjson.com/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });