import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom";
import style from "../common/FormsControls/FormsControl.module.css"
import classes from "./Login.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
   //handleSubmit пробросился автоматически при обертывании в LoginReduxForm. Он помогает перерисовываться при каждом нажатии 
   return (
      <form onSubmit={handleSubmit} className={classes.login}> 
         <h3>Authentication</h3>
         <div>
            <Field className={classes.input} placeholder={"Email"} validate={[required, maxLengthCreator(30)]} name="email" component={Input}/>
         </div>
         <div>
            <Field className={classes.input} placeholder={"Password"} validate={[required, maxLengthCreator(20)]} name="password" type="password" component={Input}/>
         </div>
         <div className={classes.rememberMeCheckBox}>
            <Field type={"checkbox"} name="rememberMe" component={Input}/> <span>remember me</span> 
         </div>

         { captchaUrl && <img src={captchaUrl} /> }
         { captchaUrl && <div><Field className={classes.input} placeholder={"Symbols from image"} validate={[required]} name="captcha" type="" component={Input}/></div> }

         { error && <div className={style.formSummaryError}>
            {error}
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
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
   }

   //если залогинены, редиректим на Profile, иначе выводим окно логинизации
   if (props.isAuth) {
      return <Navigate to={"/profile"} />
   }
   return <div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
   </div>
}

const mapStateToProps = (state) => ({
   captchaUrl: state.auth.captchaUrl,
   isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login} )(Login)