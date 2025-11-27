import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {


  const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm();

const {signInUser} = useAuth();


  const handleLogin = (data) => {
    console.log('form data', data)
    signInUser(data.email, data.password)
    .then(res => {
      console.log(res.user)
    })
    .catch(error => {
      console.log(error)
    })
  }

    return (
         <div className="mx-auto w-full max-w-sm shadow-2xl p-10">
          <h3 className="text-3xl text-center">WelCome Back</h3>
          <p className='text-center'>Please Login !</p>
            <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          
          <label className="label">Email</label>
          <input type="email" {...register("email", {required: true})} className="input" placeholder="Email" />
        {errors.email?.type==='required' && <p className='text-red-500'>Email is Required</p>}


          <label className="label">Password</label>
          <input type="password" {...register('password', {required: true, minLength: 6})} className="input" placeholder="Password" />
          {
            errors.password?.type==='minLength' && <p className='text-red-500'>Password Must be 6 Characters</p>
          }
          {
            errors.password?.type==='required' && <p className='text-red-500'>Enter Password</p>
          }
          
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>New to Zap shift <Link className='underline text-blue-400' to='/register'>Register</Link> </p>
            </form>
            <SocialLogin></SocialLogin>

      </div>
    );
};
export default Login;