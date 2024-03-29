import axios from "axios";

const instance = axios.create({
      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {
         "API-KEY": "2bced714-6c0d-4aab-9443-c0e68585a0ba"     //ключ берем из документации
      }
})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {      //мы берем из response только data и возвращаем data. Мы ретуриним то что возвращает then
         return response.data
      })  
   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`)
   },
   getProfile(userId) {
      console.log('Obsolete method. Please use profileAPI object.')     //предупредим, что используем старый метод и лучше использовать новый
      return profileAPI.getProfile(userId)      //если все же используется старый метод, переделигируем все равно все в новый
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`)
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`)
   },
   updateStatus(status) {
      return instance.put(`profile/status`, {status: status})
   },
   savePhoto(photoFile) {
      const formData = new FormData()
      formData.append("image", photoFile)
      
      return instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
   },
   saveProfile(profile) {
      return instance.put(`profile`, profile)
   }
}

export const authAPI = {
   me() {
      return instance.get(`auth/me`)
   },
   login(email, password, captcha = null) {
      return instance.post(`auth/login`, {email, password, captcha})
   },
   logout() {
      return instance.delete(`auth/login`)
   },
}

export const securityAPI = {
   getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`)
   }
}
