import axios from "axios";

const instance = axios.create({
      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {
         "API-KEY": "2bced714-6c0d-4aab-9443-c0e68585a0ba"     //синтаксис берем из документации
      }
})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {      //мы берем из response только data и возвращаем data. Мы ретуриним то что возвращает then
         return response.data
      })  
   }
}


//сделать самому follow и unfollow
/* export const getUsers2 = (currentPage = 1, pageSize = 10) => {
   return instance.get(baseUrl + `follow?page=${currentPage}&count=${pageSize}`).then(response => {      //мы берем из response только data и возвращаем data. Мы ретуриним то что возвращает then
      return response.data
   })  
} */
