//уведомляем, что поле обязательно для заполнения
export const required = (value) => {
   if (value) return undefined      //условие если value есть
   return "Fieled is required"       //условие если value нет
}

//создали функцию - thunk, с помощью которой будем проверять в разных местах количество введенных символов
export const maxLengthCreator = (maxLength) => (value) => {
   if (value.length > maxLength) return `Max length is ${maxLength} symbols`     //условие если длина > 30 символов 
   return undefined        //противный случай
}