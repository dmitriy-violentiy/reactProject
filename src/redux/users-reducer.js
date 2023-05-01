import { usersAPI } from "../api/api"

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
      followingInProgress: []    //for disabled button
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

export const followSuccess = (userId) => {   //передаем userId для того чтобы менять значение follow/unfollow
   return {
      type: FOLLOW,
      userId
   }
}

export const unfollowSuccess = (userId) => { 
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

export const requestUsers = (page, pageSize) => {     //создали thunkCreator и передали в него currentPage и pageSize чтобы у внутреннего thunk был доступ к ним
   return (dispatch) => {
      dispatch(toggleIsFetching(true))      //когда еще ответ запроса не пришел, true (т.е. gif прелоадера отрабатывает)
      dispatch(setCurrentPage(page))         //выделение активной вкладки в страницах пользователей
      
      usersAPI.getUsers(page, pageSize).then(data => {     //так при загрузке получаем пользователей
         dispatch(toggleIsFetching(false))     //когда ответ на запрос пришел, выключаем gif прелоадера
         dispatch(setUsers(data.items))
         dispatch(setTotalUsersCount(data.totalCount))
      })
   }
}

export const follow = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId))
      usersAPI.follow(userId)  //обращаемся через thunk
         .then(response => {     //запрос на подписку
            if (response.data.resultCode == 0) {   //data и resultCode посмотрели в документации API. Условие если сервер подтвердил подписку
               dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
      })
   }
}

export const unfollow = (userId) => {     //создали thunkCreator и передали в него currentPage и pageSize чтобы у внутреннего thunk был доступ к ним
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId))
      usersAPI.unfollow(userId)  //обращаемся через thunk
         .then(response => {     //запрос на подписку
            if (response.data.resultCode == 0) {   //data и resultCode посмотрели в документации API. Условие если сервер подтвердил подписку
               dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
      })
   }
}

export default usersReducer;