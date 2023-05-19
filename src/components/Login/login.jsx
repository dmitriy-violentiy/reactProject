import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom";
import classes from "./Login.module.css"
import { useForm } from "react-hook-form";

const LoginForm = ({login, isAuth, captchaUrl}) => {
   
   const {
      register,
      formState: {
         errors
      },
      handleSubmit,
   } = useForm({
      mode: "onBlur"
   })

   const onSubmit = async ({email, password, captcha}) => {
      login(email, password, captcha)
   }
   if (isAuth) {
      return <Navigate to={"/profile"} />
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={classes.login}> 
         <h3>Authentication</h3>
            <div>
               <input className={classes.input} placeholder="E-mail" 
               {...register('email', {}
               )}/>
            </div>
            
            <div>
               <input className={classes.input} placeholder="Password" type="password" 
               {...register('password', {
                  required: true
               }
               )}/>
            </div>

            { captchaUrl && <img src={captchaUrl} /> }
            { captchaUrl && <div><input className={classes.input} placeholder={"Symbols from image"} required 
            {...register('captcha', {
                  required: true
               }
               )}/></div> }
         
         <button type="submit">login</button>
      </form>
   )
}

const mapStateToProps = (state) => ({
   captchaUrl: state.auth.captchaUrl,
   isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login} )(LoginForm)