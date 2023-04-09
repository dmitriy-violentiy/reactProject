import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import friendsReducer from "./friends-reducer"
import usersReducer from "./users-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   friendsPage: friendsReducer,
   usersPage: usersReducer
})

let store = legacy_createStore(reducers)

window.store = store

export default store