import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../hook/useAuth";
import axiosPublic from "../hook/useAxios";
import Swal from "sweetalert2";

const Modal = ({ name }) => {const {
    register,
    handleSubmit,    formState: { errors },
  } = useForm();

  const { login, createUser, signUpWithGoogle, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const onSubmit = (data) => {
    console.log(data);

    if (isLogin) {
      // Login logic
      login(data.email, data.password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          alert("Login Successful");
          document.getElementById("login").close();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      createUser(data.email, data.password)
        .then((result) => {
          // Signed up
          const user = result.user;
          console.log(user);
          console.log(data);
          updateUserProfile(data.name, data.photoURL).then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              password: data.password,
            };
            axiosPublic.post("/users", userInfo).then((response) => {
              console.log(response);
              console.log(user);
              Swal.fire({
                title: "Account created Successfully",
                icon: "success",
                timer: 1500,
              });
              document.getElementById("login").close();
            });
          });
          // alert("Account created Successfully")
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const googleSigUp = async () => {
    document.getElementById("login").close();
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((response) => {
          console.log(response.status);
        });
        Swal.fire({
          title: "Login google account successfully",
          icon: "success",
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <dialog id={name} className="modal">
      <div className="modal-box">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">
            {isLogin ? "Please Login!" : "Sign Up Now!"}
          </h3>
          {!isLogin ? (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered"
                required
                {...register("name")}
              />
            </div>
          ) : null}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              {...register("password")}
            />
            {!isLogin && (
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value={isLogin ? "Login" : "Sign Up"}
              className="btn bg-rose-500 hover:bg-red text-white"
            />
          </div>
          <p className="text-center my-2 ">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="underline text-red-700 ml-1"
              onClick={toggleForm}
            >
              {isLogin ? "Sign Up Now" : "Login"}
            </button>
          </p>
          <button
            htmlfor={name}
            className="btn btn-sm btn-cicle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById(name).close()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </form>
        <div className="text-center space-x-3 mb-5 ">
          <button
            onClick={googleSigUp}
            className="btn btn-ghost btn-circle hover:bg-red hover:text-white "
          >
            <SiGmail />
          </button>
          <button className="btn btn-ghost btn-circle hover:bg-red hover:text-white ">
            <FaFacebookF />
          </button>
          <button className="btn btn-ghost btn-circle hover:bg-red hover:text-white ">
            <FaGithub />
          </button>
        </div>
      </div>
    </dialog>

  );
};

export default Modal;
