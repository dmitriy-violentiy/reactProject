const initialState = {
   friends: [
      { id: 1, name: "Dmitriy" },
      { id: 2, name: "Oleg" },
      { id: 3, name: "Inna" },
      { id: 4, name: "Egor" },
      { id: 5, name: "Anna" },
      { id: 6, name: "Kerol" },
      { id: 6, name: "Kirill" },
   ]
}

const friendsReducer = (state = initialState, action) => {
   return state
}  

export default friendsReducer;