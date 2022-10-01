import React, { useEffect } from "react";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../shared/Loading";
import { Link, useLocation,useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [token] =  useToken(user || gUser)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect( () => {
    if (token) {
      navigate(from, { replace: true });
    }
  },[token,from,navigate])

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  if ( loading || gLoading) {
    return <Loading></Loading>;
  }
  let loginError;
  if (error || gError) {
    loginError = <p className="text-red-500 ">{error?.message || gError?.message}</p>;
  }

  

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please give a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Set minimum 6 character",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                
              </label>
              <small className="label">{loginError}</small>
            </div>
            
            <input
              className="btn w-full max-w-xs"
              value={"login"}
              type="submit"
            />
          </form>
          <p className="text-xs text-center mt-2.5">New to doctors portal <Link to='/register' className="text-secondary">Please Register</Link></p>

          <div className="divider">OR</div>

          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-accent"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
