import React, { useState } from "react";
import Header from "./Header";


const Login = () => {

    // to toggle the sign in form you need a state variable
    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInform=()=>{
setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="p-12 bg-black absolute mt-36 w-3/12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : "sign Up"}</h1>
        {!isSignInForm && ( <input
          type="text"
          placeholder="full Name"
          className="p-2 my-4 w-full bg-gray-700"
        />)}
        <input
          type="text"
          placeholder="Email address"
          className="p-2 my-4 w-full bg-gray-700"
        />
      
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
        {isSignInForm ? 'Sign In' : "sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInform}>{isSignInForm ? 'New to NetFlix? Sign Up Now' : "Already a user? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
