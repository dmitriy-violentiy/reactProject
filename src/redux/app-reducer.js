import { getAuthUserData } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
      initialized: false
}

const appReducer = (state = initialState, action) => {

   switch(action.type) {
      case INITIALIZED_SUCCESS: 
         return {
            ...state,
            initialized: true
         }
      
      default:
         return state;       
   }
} 

export const initializedSuccess = () => {
   return {
      type: INITIALIZED_SUCCESS,
   }
}

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthUserData())    //получение инициализационных данных
   Promise.all([promise])        //поместили промис в массив на случай, если их будет несколько. И когда все промисы зарезолвяться диспатчим initializedSuccess
   .then(() => {
      dispatch(initializedSuccess())
   })   
}

export default appReducer;