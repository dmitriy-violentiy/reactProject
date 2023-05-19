import { authAPI, securityAPI } from "../api/api"

const SET_USER_DATA = 'my-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'my-network/auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
      userId: null,
      email: null,
      login: null,
      isAuth: false,
      captchaUrl: null 
}

const authReducer = (state = initialState, action) => {

   switch(action.type) {
      case SET_USER_DATA: 
      case GET_CAPTCHA_URL_SUCCESS: 
         return {
            ...state,
            ...action.payload 
         }  
      
      default:
         return state       
   }
} 

export const setAuthUserData = (userId, email, login, isAuth) => {
   return {
      type: SET_USER_DATA,
      payload: {
         userId,
         email,
         login,
         isAuth
      }
   }
}

export const getCaptchaUrlSuccess = (captchaUrl) => {
   return {
      type: GET_CAPTCHA_URL_SUCCESS,
      payload: {
         captchaUrl
      }
   }
}

export const getAuthUserData = () => async (dispatch) => {
   let response = await authAPI.me()     //так при загрузке получаем пользователей
      if (response.data.resultCode === 0) {
         let {id, login, email} = response.data.data
         dispatch(setAuthUserData(id, email, login, true))
      }
}

export const login = (email, password, captcha) => async (dispatch) => {
   let response = await authAPI.login(email, password, captcha)
      if (response.data.resultCode === 0) {
         dispatch(getAuthUserData())         //когда ответ положительный, диспатчим и повторяем круг заново, чтобы залогиниться
      } else {
         if (response.data.resultCode === 1) {
            alert(response.data.messages)
         }
         if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
         }
         /* let message =  response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
         dispatch(stopSubmit("login", {_error: message}))  */  //выводим общую ошибку, если есть ошибка ввода данных. Передаем какую форму хотим стопать и проблемные свойства с ошибкой
      }
}

export const getCaptchaUrl = () => async (dispatch) => {
   const response = await securityAPI.getCaptchaUrl()
   const captchaUrl =  response.data.url     //получаем url с сервера
   dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
   let response = await authAPI.logout()
      if (response.data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false))         //когда ответ положительный, удалится кука, все обнуляем 
      }
}

export default authReducer;