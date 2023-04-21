import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import friendsReducer from "./friends-reducer"
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   friendsPage: friendsReducer,
   usersPage: usersReducer,
   auth: authReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store