const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


let initialState = {
      users: [],
      pageSize: 5,
      totalUsersCount: 0,
      currentPage: 2
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
         return {...state, users: action.users}       //берем из action users и добавляем в state
      }
      case SET_CURRENT_PAGE: {
         return {...state, currentPage: action.currentPage}
      }
      case SET_TOTAL_USERS_COUNT: {
         return {...state, totalUsersCount: action.count}
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

export const setCurrentPageActionCreator = (currentPage) => { 
   return {
      type: SET_CURRENT_PAGE,
      currentPage
   }
}
export const setUsersTotalCountActionCreator = (totalUsersCount) => { 
   return {
      type: SET_TOTAL_USERS_COUNT,
      count: totalUsersCount
   }
}

export default usersReducer;