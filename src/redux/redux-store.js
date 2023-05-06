import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import friendsReducer from "./friends-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./app-reducer"

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   friendsPage: friendsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,    //отвечает за формы
   app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store