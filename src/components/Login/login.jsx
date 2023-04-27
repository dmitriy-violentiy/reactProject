import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const LoginForm = (props) => {
   //handleSubmit пробросился автоматически при обертывании в LoginReduxForm. Он помогает перерисовываться при каждом нажатии 
   return (
      <form onSubmit={props.handleSubmit}> 
         <div>
            <Field placeholder={"Login"} validate={[required, maxLengthCreator(10)]} name="login" component={Input}/>
         </div>
         <div>
            <Field placeholder={"Password"} validate={[required, maxLengthCreator(10)]} name="password" component={Input}/>
         </div>
         <div>
            <Field type={"checkbox"} name="rememberMe" component={Input}/> remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}
 //оборачиваем LoginForm в LoginReduxForm. Даем уникальное имя форме. Этот form никак не связан с глобальным form, который сидит в redux-store
const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)

const Login = (props) => {
   //в formData приходят данные, собранные из формы
   const onSubmit = (formData) => {
      console.log(formData)
   }

   return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
   </div>
}

export default (Login)