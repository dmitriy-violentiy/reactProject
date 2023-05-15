const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
   dialogs: [
      { id: 1, name: "Anton" },
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
   ]
};

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_MESSAGE: 
         let text = action.newMessageText
         let newMessage = {
            id: 6,
            messege: text
         }
      return {
            ...state,
            messages: [...state.messages, newMessage]      //скопировали массив из главного state и добавили в него новый объект
         }
      default: 
         return state;

}
};

export const addMessageActionCreator = (newMessageText) => {
   return {
      type: ADD_MESSAGE,
      newMessageText
   };
}

export default dialogsReducer;
