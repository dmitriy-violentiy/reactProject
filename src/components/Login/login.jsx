import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom";
import style from "../common/FormsControls/FormsControl.module.css"

const LoginForm = (props) => {
   //handleSubmit пробросился автоматически при обертывании в LoginReduxForm. Он помогает перерисовываться при каждом нажатии 
   return (
      <form onSubmit={props.handleSubmit}> 
         <div>
            <Field placeholder={"Email"} validate={[required, maxLengthCreator(30)]} name="email" component={Input}/>
         </div>
         <div>
            <Field placeholder={"Password"} validate={[required, maxLengthCreator(20)]} name="password" type="password" component={Input}/>
         </div>
         <div>
            <Field type={"checkbox"} name="rememberMe" component={Input}/> remember me
         </div>
         { props.error && <div className={style.formSummaryError}>
            {props.error}
         </div> }
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
      props.login(formData.email, formData.password, formData.rememberMe)
   }

   //если залогинены, редиректим на Profile, иначе выводим окно логинизации
   if (props.isAuth) {
      return <Navigate to={"/profile"} />
   }
   return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
   </div>
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login} )(Login)