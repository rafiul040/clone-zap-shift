import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleRegisration = (data) => {
    console.log("After Registration", data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleRegisration)}>
        <fieldset className="fieldset">

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is Required</p>
          )}

          {/* Password */}
          <label className="label">Password</label>
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
          {errors.password?.type === "required" && (
            <p className="text-red-500">Enter Password</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">Password Must be 6 character or longer</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Must include upper, lower, number & symbol
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
