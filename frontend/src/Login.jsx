import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import Validation from './LoginValidation';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./index.css";
import hplogo from "./assets/hp.png";

function Login() {
  const [values, setValues] = useState({
    email:'',
    password: ''
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }; 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors); // Update errors state

    // Use setTimeout to ensure that errors state has been updated before checking
    setTimeout(() => {
      if (Object.values(errors).every(error => error === "")) {
        axios.post('http://localhost:8080/login', values)
          .then(res => {
            if (res.data === "Success Charan") {
              navigate('/home');
            } else {
              alert("failure")
            }
          })
          .catch(err => console.log(err));
      }
    }, 0);
  };

  return (
    <div className="bg-flags h-screen flex items-center justify-center cursor-elderwand">
      <div className="bg-white p-8 rounded-lg shadow-md sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-24 w-24"
          src={hplogo}
          alt="Your Company"
        />
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Log in to your Account
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email" placeholder="Enter Email" onChange={handleInput} name="email"
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-500 hover:text-indigo-700">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password" placeholder="Enter password" onChange={handleInput} name="password"
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && <span className="text-sm text-red-500">{errors.password}</span>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="cursor-elderwand flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
        <div className="text-center mt-2">
          <Link to="/register" className="text-blue-500 hover:underline ">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
