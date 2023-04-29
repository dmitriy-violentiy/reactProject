import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
      userId: null,
      email: null,
      login: null,
      isAuth: false
      /* isFetching: false */
}

const authReducer = (state = initialState, action) => {

   switch(action.type) {
      case SET_USER_DATA: 
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

export const getAuthUserData = () => (dispatch) => {
   authAPI.me().then(response => {     //так при загрузке получаем пользователей
      if (response.data.resultCode === 0) {
         let {id, login, email} = response.data.data
         dispatch(setAuthUserData(id, email, login, true))
      }
   })
}

export const login = (email, password, rememberMe) => (dispatch) => {
   authAPI.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) {
         dispatch(getAuthUserData())         //когда ответ положительный, диспатчим и повторяем круг заново, чтобы залогиниться
      } else {
         let message =  response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
         dispatch(stopSubmit("login", {_error: message}))   //выводим общую ошибку, если есть ошибка ввода данных
      }
   })
}

export const logout = () => (dispatch) => {
   authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false))         //когда ответ положительный, удалится кука, все обнуляем 
      }
   })
}

export default authReducer;