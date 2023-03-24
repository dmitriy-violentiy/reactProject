const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
   dialogs: [
      { id: 1, name: "Dmitriy" },
      { id: 2, name: "Oleg" },
      { id: 3, name: "Inna" },
      { id: 4, name: "Egor" },
      { id: 5, name: "Anna" },
      { id: 6, name: "Evgen" },
   ],
   messages: [
      { id: 1, messege: "Hi" },
      { id: 2, messege: "How are you?" },
      { id: 3, messege: "Yo" },
      { id: 4, messege: "Hello" },
      { id: 5, messege: "By" },
      { id: 6, messege: "Maybe..." },
   ],
   newMessageText: 'add new message'
}

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            id: 7,
            messege:  state.newMessageText          //сюда заносится значение внесенное пользователем
         }
         state.messages.push(newMessage)     //в конец массива пушим(добавляем) новый элемент
         state.newMessageText = '' 
         return state
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newText 
         return state
      default:
         return state  
   }

}  

export const addMessageActionCreator = () => {
   return {
      type: ADD_MESSAGE
   }
}
export const updateNewMessageTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text
   }
}

export default dialogsReducer