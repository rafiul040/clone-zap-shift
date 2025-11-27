// React import — কারণ কম্পোনেন্ট বানাতে React লাগে
import React from 'react';

// useForm import — react-hook-form লাইব্রেরি থেকে আসছে, form তৈরি, validation ও data হ্যান্ডেল করতে
import { useForm } from 'react-hook-form';

// useAuth import — custom hook, যেটা তোমার auth logic (registerUser) দিচ্ছে
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';

const Register = () => {

  // useForm থেকে register (input control), handleSubmit (submit handler wrapper), errors (validation errors) নেওয়া হচ্ছে
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  
  // useAuth থেকে registerUser ফাংশন নেওয়া—custom authentication system
  const {registerUser} = useAuth()

  // form submit হলে data পাওয়া যাবে
  // এখানে লগ করা হচ্ছে, তারপর registerUser দিয়ে Firebase/Auth signup করা হচ্ছে
  const handleRegisration = (data) => {
    console.log("After Registration", data);

    // registerUser(email, password) — backend/auth service এ new user তৈরি
    registerUser(data.email, data.password)
    .then(res => {
      // সফল হলে নতুন user কে console এ দেখানো
      console.log(res.user)
    })
    .catch(error => {
      // ভুল হলে error লগ করা
      console.log(error)
    })
  };

  return (
    <div className="max-w-sm mx-auto w-full">

      <h3 className="text-3xl text-center">WelCome to Zap Shift</h3>
          <p className='text-center'>Please Register !</p>
      {/* handleSubmit — react-hook-form এর wrapper, submit হলে validation check করবে */}
      <form className='card-body shadow-2xl' onSubmit={handleSubmit(handleRegisration)}>

        <fieldset className="fieldset">

          {/* Email label */}
          <label className="label">Email</label>

          {/* Email input — register দিয়ে form state এর সাথে connect করে দিচ্ছি 
              required: true মানে validation এ email না দিলে error */}
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />

          {/* যদি email required rule ভাঙে — তাহলে এই error message দেখাবে */}
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is Required</p>
          )}

          {/* Password label */}
          <label className="label">Password</label>

          {/* Password input — এখানে ৩টা validation rule দেওয়া:
              required: true → password দিতে হবে
              minLength: 6 → কমপক্ষে ৬ অক্ষর
              pattern → uppercase + lowercase + number + symbol থাকতে হবে
          */}
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
            })}
            className="input"
            placeholder="Password"
          />

          {/* password এর required rule error */}
          {errors.password?.type === "required" && (
            <p className="text-red-500">Enter Password</p>
          )}

          {/* password এর minLength rule error */}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">Password Must be 6 character or longer</p>
          )}

          {/* password এর pattern rule error */}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password Must include upper, lower, number & symbol
            </p>
          )}

          {/* Forgot password লিঙ্ক — শুধুমাত্র UI */}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          {/* Submit button — form submit করবে */}
          <button className="btn btn-neutral mt-4">Register</button>

        </fieldset>
         <p>Already have an account! to Zap shift <Link className='underline text-blue-400' to='/login'>Login</Link> </p>
      </form>
    </div>
  );
};

export default Register;
