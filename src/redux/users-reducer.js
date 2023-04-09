const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


let initialState = {
      users: []
}

const usersReducer = (state = initialState, action) => {

   switch(action.type) {
      case FOLLOW:
         return {...state, users: state.users.map( users =>  {   //map создает новый массив на основе старого, элементами которого будут те же users 
            if (users.id === action.userId) {
               return {...users, followed: true}
            }
            return users
         } )}    
      case UNFOLLOW:
         return {...state, users: state.users.map( users =>  {   //map создает новый массив на основе старого, элементами которого будут те же users 
            if (users.id === action.userId) {
               return {...users, followed: false}
            }
            return users
         } )}  
      case SET_USERS: {
         return {...state, users: [ ...state.users, ...action.users ]}       //берем из action users и добавляем в state
      }
      default: 
         return state
   }

} 

export const followActionCreator = (userId) => {   //передаем userId для того чтобы менять значение follow/unfollow
   return {
      type: FOLLOW,
      userId
   }
}

export const unfollowActionCreator = (userId) => { 
   return {
      type: UNFOLLOW,
      userId
   }
}

export const setUsersActionCreator = (users) => { 
   return {
      type: SET_USERS,
      users
   }
}

export default usersReducer;