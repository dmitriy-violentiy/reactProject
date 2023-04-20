const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
      users: [],
      pageSize: 5,
      totalUsersCount: 0,
      currentPage: 1,
      isFetching: true,
      followingInProgress: []
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
      case TOGGLE_IS_FETCHING: {
         return {...state, isFetching: action.isFetching}
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
         return {
            ...state, 
            followingInProgress: action.isFetching ?
               [...state.followingInProgress, action.userId] :             //если true то деструктуризируем массив и в конец дописываем id которая приходит в action
               state.followingInProgress.filter(id => id != action.userId)    //если false, то с помощью фильтрцаии создаем копию нового массива и фильтруем
         }
      }
      default: 
         return state
   }

} 

export const follow = (userId) => {   //передаем userId для того чтобы менять значение follow/unfollow
   return {
      type: FOLLOW,
      userId
   }
}

export const unfollow = (userId) => { 
   return {
      type: UNFOLLOW,
      userId
   }
}

export const setUsers = (users) => { 
   return {
      type: SET_USERS,
      users
   }
}

export const setCurrentPage = (currentPage) => { 
   return {
      type: SET_CURRENT_PAGE,
      currentPage
   }
}

export const setTotalUsersCount = (totalUsersCount) => { 
   return {
      type: SET_TOTAL_USERS_COUNT,
      count: totalUsersCount
   }
}

export const toggleIsFetching = (isFetching) => { 
   return {
      type: TOGGLE_IS_FETCHING,
      isFetching
   }
}

export const toggleFollowingProgress = (isFetching, userId) => { 
   return {
      type: TOGGLE_IS_FOLLOWING_PROGRESS,
      isFetching,
      userId
   }
}

export default usersReducer;